import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

function ItensListados({ item }) {
    return (
        <View style={{ padding: 10 }}>
            <Text>{item.title}</Text>
        </View>
    );
}

export default function Filtro() {
    const [texto, setTexto] = useState('');
    const [data, setData] = useState([
        { id: 1, title: 'Maçã' },
        { id: 2, title: 'Banana' },
        { id: 3, title: 'Abacaxi' },
        { id: 4, title: 'Morango' },
        { id: 5, title: 'Uva' },
    ]);
    const [dataFiltrada, setDataFiltrada] = useState(data);

    const handleSearch = () => {
        const itensFiltrados = data.filter(item =>
            item.title.toLowerCase().includes(texto.toLowerCase())
        );
        setDataFiltrada(itensFiltrados);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput
                placeholder="Digite o texto de busca"
                value={texto}
                onChangeText={text => setTexto(text)}
                style={styles.input}
            />
            <Button title="Filtrar" onPress={handleSearch} />
            <FlatList
                data={dataFiltrada}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ItensListados item={item} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})