import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import TodoList from '../../components/List/TodoList';
import styles from './style';

const ListScreen = ({navigation}) => {
  // State tanımlamaları
  const [todos, setTodos] = useState([]);

  // Yeni görev ekleme işlevi
  const handleAddTodo = text => {
    const newTodo = {
      id: Math.random(), // Rastgele bir id oluştur
      text: text.text, // Text alanını doğrudan al
      startTime: text.startTime,
      endTime: text.endTime,
      completed: false,
    };
    setTodos([...todos, newTodo]); // Yeni görevi ekleyerek güncelle
  };

  // Görev durumunu değiştirme işlevi
  const handleToggleTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTodos(updatedTodos); // Güncellenmiş görev listesini ayarla
  };

  // Görevi silme işlevi
  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos); // Görevi listeden kaldırarak güncelle
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Eğer görev yoksa ekrana mesaj göster */}
        {todos.length <= 0 && (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.title}> Yeni Görev Ekleyin</Text>
            <Text style={styles.title}>+</Text>
          </View>
        )}

        {/* Görev listesi bileşeni */}
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />

        {/* Yeni görev ekleme butonu */}
        <TouchableOpacity
          onPress={() => navigation.navigate('AddScreen', {handleAddTodo})}
          style={styles.addButtonContainer}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListScreen;
