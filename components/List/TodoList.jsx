import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// TodoList bileşeni
function TodoList({todos, onToggle, onDelete}) {
  // Her bir todo öğesini render etmek için kullanılan işlev
  const renderTodoItem = ({item}) => {
    return (
      <View style={styles.todoItem}>
        <View style={styles.row}>
          {/* Görevi tamamlandı olarak işaretleme */}
          <TouchableOpacity onPress={() => onToggle(item.id)}>
            <View style={[styles.checkbox, item.completed && styles.checked]}>
              {item.completed && <Text style={styles.checkedText}>✓</Text>}
            </View>
          </TouchableOpacity>

          {/* Görev metni ve tarih */}
          <TouchableOpacity style={{flex: 1}} onPress={() => onToggle(item.id)}>
            <Text
              numberOfLines={2}
              style={[styles.todoText, item.completed && styles.completed]}>
              {item.text}
            </Text>
            <View style={styles.rowDate}>
              <Text style={[item.completed && styles.completed]}>
                Başlangıç
              </Text>
              <Text
                style={[styles.todoDate, item.completed && styles.completed]}>
                ({item.startTime})
              </Text>
            </View>

            <View style={styles.rowDate}>
              <Text style={[item.completed && styles.completed]}>Bitiş</Text>
              <Text
                style={[styles.todoDate, item.completed && styles.completed]}>
                ({item.endTime})
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Görevi silme düğmesi */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}>
          <Image source={require('./trash.png')} />
        </TouchableOpacity>
      </View>
    );
  };

  // TodoList bileşeni dönüşü
  return (
    <FlashList
      data={todos}
      estimatedItemSize={400}
      renderItem={renderTodoItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

// Stil tanımları
const styles = StyleSheet.create({
  todoItem: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'pink',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: 'pink',
  },
  checkedText: {
    textAlign: 'center',
    color: 'white',
  },
  todoText: {
    maxWidth: 300,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'rgba(128, 128, 128, 0.5)',
  },
  deleteButton: {
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  todoDate: {
    color: 'gray',
    fontSize: 12,
  },
  rowDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default TodoList;
