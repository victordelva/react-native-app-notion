import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";
import { getPosts, PostData } from "../services/notion-app";

const MainScreen: React.FC = () => {
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
            <Header />
            <ScrollView>
                {(posts || []).map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MainScreen;
