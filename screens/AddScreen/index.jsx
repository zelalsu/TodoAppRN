import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './sytle';

const AddScreen = ({route, navigation}) => {
  // State'lerin tanımlanması
  const [text, setText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isStartTimePickerVisible, setIsStartTimePickerVisible] =
    useState(false);
  const [isEndTimePickerVisible, setIsEndTimePickerVisible] = useState(false);

  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  // Saat seçici gösterme/gizleme işlevleri
  const handleTimePicker = type => {
    if (type === 'start') {
      setIsStartTimePickerVisible(true);
    } else {
      setIsEndTimePickerVisible(true);
    }
  };

  // Saat onaylama işlevi
  const handleTimeConfirm = (time, type) => {
    const optionsTime = {hour: '2-digit', minute: '2-digit', hour12: false}; // Saat formatı için seçenekler
    const optionsDate = {year: 'numeric', month: '2-digit', day: '2-digit'}; // Tarih formatı için seçenekler

    const formattedTime = new Date(time).toLocaleTimeString(
      'tr-TR',
      optionsTime,
    );
    const formattedDate = new Date(time).toLocaleDateString(
      'tr-TR',
      optionsDate,
    );

    if (type === 'start') {
      setStartTime(formattedTime + ' , ' + formattedDate); // Saat ve tarih bilgisini birleştirerek depolayın
      setIsStartTimePickerVisible(false);
    } else {
      setEndTime(formattedTime + ' , ' + formattedDate); // Saat ve tarih bilgisini birleştirerek depolayın
      setIsEndTimePickerVisible(false);
    }
  };

  // Yeni etkinlik ekleme işlevi
  const handleSubmit = () => {
    // Metni boşsa uyarı göster
    if (!text.trim()) {
      Alert.alert('Uyarı', 'Etkinlik adı boş olamaz.');
      return;
    }

    // Metin dolu ise devam et
    const {handleAddTodo} = route.params;
    handleAddTodo({
      text,
      startTime: startTime ? startTime.toString() : currentTime, // Başlangıç saati varsa string formatına dönüştür
      endTime: endTime ? endTime.toString() : currentTime, // Bitiş saati varsa string formatına dönüştür
    });
    setText('');
    setStartTime('');
    setEndTime('');
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Etkinlik adı giriş alanı */}

        <View style={styles.altContainer}>
          <View style={styles.dot} />

          <View style={{flex: 1}}>
            <View style={styles.row}>
              <Text style={styles.title}>YAPILACAK</Text>
            </View>
            <TextInput
              style={[styles.input, {borderColor: text ? 'purple' : 'gray'}]}
              value={text}
              placeholder="Etkinlik Adı Girin"
              onChangeText={setText}
            />
            {/* Başlangıç saati seçici */}
            <TouchableOpacity
              onPress={() => handleTimePicker('start')}
              style={styles.dateContainer}>
              <Text style={styles.date}>Başlangıç Saati:</Text>
              <Text style={styles.time}>
                {startTime ? startTime : currentTime}
                {'  >'}
              </Text>
            </TouchableOpacity>
            {/* Bitiş saati seçici */}
            <TouchableOpacity
              onPress={() => handleTimePicker('end')}
              style={styles.dateContainer}>
              <Text style={styles.date}>Bitiş Saati:</Text>
              <Text style={styles.time}>
                {endTime ? endTime : currentTime}
                {'  >'}
              </Text>
            </TouchableOpacity>
            {/* Ekle butonu */}

            {/* Başlangıç saati seçici */}
            <DateTimePickerModal
              isVisible={isStartTimePickerVisible}
              mode="datetime"
              is24Hour={true} // 24 saatlik formatı kullan
              onConfirm={time => handleTimeConfirm(time, 'start')}
              onCancel={() => setIsStartTimePickerVisible(false)}
            />
            <DateTimePickerModal
              isVisible={isEndTimePickerVisible}
              mode="datetime"
              display="spinner" // Spinner modunda göster
              is24Hour={true} // 24 saatlik formatı kullan
              onConfirm={time => handleTimeConfirm(time, 'end')}
              onCancel={() => setIsEndTimePickerVisible(false)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddScreen;
