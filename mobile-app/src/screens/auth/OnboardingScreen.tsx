import React, {
  useRef,
  useState,
} from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import { Colors } from "../../theme/colors";

import { onboardingData }
from "../../data/onboardingData";

import OnboardingItem
from "../../components/onboarding/OnboardingItem";

const { width } =
Dimensions.get("window");

export default function OnboardingScreen() {

  const navigation: any =
  useNavigation();

  const flatListRef =
  useRef<FlatList>(null);

  const [currentIndex,
    setCurrentIndex] =
    useState(0);

 const nextSlide = () => {

  const nextIndex =
  currentIndex + 1;

  if (
    nextIndex <
    onboardingData.length
  ) {

    flatListRef.current?.scrollToOffset({
      offset: nextIndex * width,
      animated: true,
    });

    setCurrentIndex(nextIndex);

  }

};

  return (

    <View style={styles.container}>

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (
          <OnboardingItem
            item={item}
          />
        )}
        getItemLayout={(
          data,
          index
        ) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onMomentumScrollEnd={(e) => {

          const index =
          Math.round(
            e.nativeEvent.contentOffset.x /
            width
          );

          setCurrentIndex(index);

        }}
      />

      <View style={styles.footer}>

        <View style={styles.dotsContainer}>

          {onboardingData.map(
            (_, index) => (

              <View
                key={index}
                style={[
                  styles.dot,

                  currentIndex ===
                  index &&

                  styles.activeDot,
                ]}
              />

            )
          )}

        </View>

        {currentIndex ===
        onboardingData.length - 1 ? (

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.replace(
                "Login"
              )
            }
          >

            <Text
              style={styles.buttonText}
            >
              Get Started
            </Text>

          </TouchableOpacity>

        ) : (

          <TouchableOpacity
            style={styles.button}
            onPress={nextSlide}
          >

            <Text
              style={styles.buttonText}
            >
              Next
            </Text>

          </TouchableOpacity>

        )}

      </View>

    </View>

  );
}

const styles =
StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:
      Colors.primary,
  },

  footer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },

  dotsContainer: {
    flexDirection: "row",
    marginBottom: 25,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#888",
    marginHorizontal: 5,
  },

  activeDot: {
    width: 25,
    backgroundColor:
      Colors.accent,
  },

  button: {
    backgroundColor:
      Colors.accent,

    paddingHorizontal: 35,
    paddingVertical: 14,

    borderRadius: 12,

    minWidth: 140,

    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },

});