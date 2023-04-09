import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Post from "../components/Post";
import { getPosts, PostData } from "../services/notion-app";

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getPosts();
            setPosts(data);
        })();
    }, []);

    console.log({posts});

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {(posts || []).map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Posts;
