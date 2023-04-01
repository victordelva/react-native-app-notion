import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>© 2023 - Mi App Notion</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    text: {
        fontSize: 14,
    },
});

export default Footer;