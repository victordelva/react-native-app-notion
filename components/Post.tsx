import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PostProps {
    post: {
        title: string;
        image: {
            url: string;
        };
    };
}

const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            {post.image.url && (
                <Image style={styles.image} source={{ uri: post.image.url }} />)
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
});

export default Post;
