import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../navigation/TabNavigator';
import { getTrendingProducts, getDealsOfTheDay, Product } from '../data/fakeStore';


type HomeScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'HomeTab'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation: _navigation }) => {
  const trendingProducts = getTrendingProducts();
  const dealsOfTheDay = getDealsOfTheDay();

  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {item.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}%</Text>
          </View>
        )}
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>${item.price}</Text>
          {item.originalPrice && (
            <Text style={styles.originalPrice}>${item.originalPrice}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.homeIconContainer}>
            <Icon name="home" size={20} color="#4CAF50" style={styles.homeIcon} />
            <Text style={styles.homeText}>Home</Text>
            <Icon name="chevron-down-outline" size={16} color="#666666" />
          </View>
          <Text style={styles.addressText} numberOfLines={1}>
            A-01, Bank street , new delhi-110096 A-01, Bank street
          </Text>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <Icon name="person-circle" size={36} color="grey" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="What's your daily needs?"
            placeholderTextColor="#999999"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={24} color="#4bc54f" />
          </TouchableOpacity>
        </View>

        {/* Eco Score Card */}
        <View style={styles.ecoScoreCard}>
          <View style={styles.ecoScoreHeader}>
            <Text style={styles.ecoScoreTitle}>Your Eco Score Today</Text>
            <View style={styles.leafIcon}>
              <Text style={styles.leafEmoji}>🍃</Text>
            </View>
          </View>

          <View style={styles.ecoScoreContent}>
            <View style={styles.gradeSection}>
              <Text style={styles.gradeText}>A</Text>
              <View style={styles.streakBadge}>
                <Text style={styles.streakText}>7 day streak! 🔥</Text>
              </View>
            </View>

            <Text style={styles.savedText}>You've saved today:</Text>

            <View style={styles.savingsContainer}>
              <View style={styles.savingItem}>
                <Text style={styles.recycleIcon}>♻️</Text>
                <Text style={styles.savingText}>2kg plastic</Text>
              </View>
              <View style={styles.savingItem}>
                <Text style={styles.cloudIcon}>☁️</Text>
                <Text style={styles.savingText}>1.4kg CO₂</Text>
              </View>
            </View>

            <View style={styles.weeklyGoalContainer}>
              <Text style={styles.weeklyGoalText}>Weekly Goal</Text>
              <Text style={styles.goalPercentage}>85%</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>
        </View>
        {/* Trending Products */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Trending Products</Text>
          <FlatList
            data={trendingProducts}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          />
        </View>

        {/* Deals of the Day */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Deals of the Day!</Text>
          <FlatList
            data={dealsOfTheDay}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          />
        </View>
      </ScrollView>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 95,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
  },
  headerLeft: {
    flex: 1,
    marginRight: 12,
  },
  homeIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  homeIcon: {
    marginRight: 6,
  },
  homeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginRight: 4,
  },

  addressText: {
    fontSize: 12,
    color: '#999999',
    marginTop: 2,
  },
  profileIcon: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 16,

  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#000000',
  },
  searchButton: {
    padding: 8,
  },

  ecoScoreCard: {
    backgroundColor: '#4bc54f',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 20,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  ecoScoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ecoScoreTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
  },
  leafIcon: {
    width: 26,
    height: 26,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leafEmoji: {
    fontSize: 14,
  },
  ecoScoreContent: {
    flex: 1,
  },
  gradeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  gradeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight: 12,
  },
  streakBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  streakText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  savedText: {
    fontSize: 13,
    color: '#ffffff',
    marginBottom: 6,
  },
  savingsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  savingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  recycleIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  cloudIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  savingText: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '500',
  },
  weeklyGoalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  weeklyGoalText: {
    fontSize: 13,
    color: '#ffffff',
  },
  goalPercentage: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '600',
  },
  progressBar: {
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2.5,
  },
  progressFill: {
    height: 5,
    backgroundColor: '#ffffff',
    borderRadius: 2.5,
    width: '85%',
  },
  sectionContainer: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  productsContainer: {
    paddingHorizontal: 16,
  },
  productCard: {
    width: 160,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF5722',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 12,
    color: '#999999',
    textDecorationLine: 'line-through',
  },
  addButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 28,
    height: 28,
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default HomeScreen;