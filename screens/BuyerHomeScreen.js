import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const yarnTypes = [
  {
    type: 'Cotton',
    description: 'Natural & Versatile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb7mVngvf5rYG9qFtFmcRTGb0VzQFhKQJ9VqkT5vvmodIYcwGHRP1XBcekcJlatJJCpnbN_t29LPpudBWvrOq4k-oYmiqCGUiHJTcnc7_xzIAtdI5U68NbZdxbwzyNY5iqoCPD0zBvWEGGGQXohx8NFdQtfy4__jDq6-zvqhvdnnPGJn2KubKBI5awDma_6zuAqWjJWydQFF-zSDvuXJVZSB_CfeAeaVHtCO2D5_Jg5kdFD__m5ioAzdWWr2zuOZlQe6ShO6_b2Lo',
  },
  {
    type: 'Polyester',
    description: 'Durable & Wrinkle-free',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr91cLA8MmTyEdpPPLNAmQigGPETm3tvv5TYnj92-9FXQ8FV7FblHVNphPiGTs-Mvi4lEjd6R7zRhPxAaj_VrVv4RdalYkt0zCHLjDVWE0X5MpQw9A8YqyCudPTBw_ALzGPxha4R3h8xhGzboTM1rSpJFXTG9nNBuQYAnU5EUuoL4MsslJ9HPMu3x-qsmrjHU4Q_v5JH3HjWCwJ9Bsndr6-O8CoYUM9beHEXuEabIwO1qAodnYEwoxYqjDLs-y4sWoCSMu5OmWO8c',
  },
  {
    type: 'Rayon',
    description: 'Soft & Breathable',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2gJi1WWkLIw1IZjmHf731TS76PkhwSSeTpeQ_LQ4Jbytj2FrdnQtpwvMIgyvWj6PWMFxZPh12GGv_rOqzHOBa1lJ5Bs-WYOCwGRd0yP-cXR5_ZtvzjQ3St3I0Ip9-j1Uzrs6Rn3IY-AuvT3FOX7dULMHHTlB93KNg0X8sKT7VOvklqw3xTti7W7KfLplEjdisQwuDMEDN_PgPTZERsjD2ZJzp1SEinMDjciWp41COyomkwbJ5dt8RFBcSPKLpN1UP8BLaYWPFIBU',
  },
];

const BuyerHomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Header />
      <ScrollView contentContainerStyle={{ paddingTop: 60 }}>
        <HeroSection />
        <View style={styles.cardContainer}>
          {yarnTypes.map((yarn, index) => (
            <YarnCard key={index} yarn={yarn} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header = () => (
    // This header is positioned absolutely to float over the scrollview content
    <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
            <MaterialIcons name="menu" size={24} color="#f1f5f9" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerButton}>
                <MaterialIcons name="notifications" size={24} color="#f1f5f9" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.pendingButton}>
                <MaterialIcons name="hourglass-top" size={16} color="#1e293b" />
                <Text style={styles.pendingButtonText}>Pending Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
                <MaterialIcons name="shopping-cart" size={24} color="#f1f5f9" />
                <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>3</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);


const HeroSection = () => (
  <ImageBackground
    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf3XtuaTgH9X0vwUeIWaZ4wDosjg43Pv5FrOoE-nGalwdSaIv8Y1zXl-dvPpcWtEhlBVUUpn1LWuvzfnXoIWTz9HqF19eJez_WC-OkZOtyzW3l4VkVOI7thNFBXCLNpxpowFFxHV9R9BM2DT6pL3cllqGtV-cQ_Xa44_D8VcYDVV8qPnpFxuO20o33S3xrbANvmXvCDKrFYSelnjXbBKGMvRZK2UjVdzJ752MhPtR8ayn00eMDfHuNasEtzS55jzXkZZ1Quf5JMyE' }}
    style={styles.heroBackground}
  >
    <View style={styles.heroOverlay}>
      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>Explore Yarn</Text>
        <Text style={styles.heroSubtitle}>Find the perfect type for your needs.</Text>
      </View>
    </View>
  </ImageBackground>
);

const YarnCard = ({ yarn }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: yarn.image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{yarn.type}</Text>
      <Text style={styles.cardDescription}>{yarn.description}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#1e293b',
      fontFamily: 'Inter_400Regular',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      position: 'absolute',
      top: StatusBar.currentHeight || 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    headerButton: {
      padding: 8,
    },
    pendingButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f1f5f9',
      borderRadius: 9999,
      paddingVertical: 6,
      paddingHorizontal: 12,
      gap: 4,
    },
    pendingButtonText: {
      color: '#1e293b',
      fontSize: 14,
      fontFamily: 'Inter_500Medium',
    },
    cartBadge: {
      position: 'absolute',
      top: 4,
      right: 4,
      backgroundColor: '#ef4444',
      borderRadius: 8,
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cartBadgeText: {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
    },
    heroBackground: {
      width: '100%',
      height: 250,
    },
    heroOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    heroContent: {
      padding: 16,
      paddingBottom: 32,
    },
    heroTitle: {
      fontSize: 28,
      fontFamily: 'Poppins_700Bold',
      color: 'white',
      marginBottom: 4,
    },
    heroSubtitle: {
      color: '#94a3b8',
      fontSize: 16,
    },
    cardContainer: {
      padding: 16,
      backgroundColor: '#1e293b',
      marginTop: -24,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    card: {
      backgroundColor: '#334155',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
    },
    cardImage: {
      width: '100%',
      height: 160,
    },
    cardContent: {
      padding: 16,
    },
    cardTitle: {
      fontSize: 18,
      fontFamily: 'Inter_600SemiBold',
      color: '#f1f5f9',
    },
    cardDescription: {
      fontSize: 14,
      color: '#94a3b8',
      marginTop: 4,
    },
  });

export default BuyerHomeScreen;
