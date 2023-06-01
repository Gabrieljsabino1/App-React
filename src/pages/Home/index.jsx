import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const AgendaBarbearia = () => {
  const [agenda, setAgenda] = useState([]);

  const adicionarCompromisso = (data, horario, cliente) => {
    const novoCompromisso = { data, horario, cliente };
    setAgenda([...agenda, novoCompromisso]);
  };

  const removerCompromisso = (index) => {
    const novaAgenda = [...agenda];
    novaAgenda.splice(index, 1);
    setAgenda(novaAgenda);
  };

  return (
    <View>
      <Text>Agenda da Barbearia</Text>
      <TextInput
        placeholder="Data"
        onChangeText={(text) => setData(text)}
      />
      <TextInput
        placeholder="Horário"
        onChangeText={(text) => setHorario(text)}
      />
      <TextInput
        placeholder="Cliente"
        onChangeText={(text) => setCliente(text)}
      />
      <Button
        title="Adicionar Compromisso"
        onPress={() => adicionarCompromisso(data, horario, cliente)}
      />
      <FlatList
        data={agenda}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>Data: {item.data}</Text>
            <Text>Horário: {item.horario}</Text>
            <Text>Cliente: {item.cliente}</Text>
            <Button
              title="Remover Compromisso"
              onPress={() => removerCompromisso(index)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default AgendaBarbearia;