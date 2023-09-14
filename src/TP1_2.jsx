import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function Ordenada() {
    const [data, setData] = useState([
        { id: 1, name: 'Maçã', pais: 'Brasil' },
        { id: 2, name: 'Banana', pais: 'México' },
        { id: 3, name: 'Abacaxi', pais: 'Argentina' },
        { id: 4, name: 'Morango', pais: 'Chile' },
        { id: 5, name: 'Uva', pais: 'Peru' },
    ]);

    const [sortedData, setSortedData] = useState(data);

    const sortBy = (elem) => {
        const sortedBy = [...data].sort((a, b) => a[`${elem}`].localeCompare(b[`${elem}`]));
        setSortedData(sortedBy);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button title="Ordenar por Nome" onPress={_ => sortBy("name")} />
                <Button title="Ordenar por País" onPress={_ => sortBy("pais")} />
            </View>
            <FlatList
                data={sortedData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Text>Nome: {item.name}</Text>
                        <Text>País: {item.pais}</Text>
                    </View>
                )}
            />
        </View>
    );
}