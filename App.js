

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const coursesData = [
  {
        id: 1,
        name: 'Information technology',
        description: 'Master online advertising, social media marketing, and SEO strategies.',
        image: require('./assets/R.jpg'), // Replace with correct image path
        rating: 0, // Add the rating property
  },
  {
    id: 2,
    name: 'Business Administration',
    description: 'Study business management, finance, and entrepreneurship.',
    image: require('./assets/OIP.jpg'),
  },
  {
    id: 3,
    name: 'Fashion Design',
    description: 'Explore fashion trends, design principles, and garment construction.',
    image: require('./assets/F.jpg'),
    rating: 0,
  },
  {
    id: 4,
    name: 'Multimedia Design',
    description: 'Learn about graphic design, web development, and animation.',
    image: require('./assets/M.jpg'),
    rating: 0,
  },
  {
    id: 5,
    name: 'Digital Marketing',
    description: 'Master online advertising, social media marketing, and SEO strategies.',
    image: require('./assets/DJ.jpg'),
    rating: 0,
  },
];

const CourseItem = ({ course }) => {
  const [rating, setRating] = useState(course.rating || 0);

  const handleRate = () => {
    if (rating < 5) {
      const newRating = rating + 1;
      setRating(newRating);
    }
  };

  return (
    
    <View style={styles.courseContainer}>
      <View style={styles.courseDetails}>
        <Image source={course.image} style={styles.courseImage} />
        <View style={styles.textContainer}>
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
          <TouchableOpacity onPress={handleRate} style={styles.rateButton}>
            <Text>Rate</Text>
          </TouchableOpacity>
          <Text>Rating: {rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  
  const [courses, setCourses] = useState(coursesData);

  const handleRateCourse = (id, newRating) => {
    const updatedCourses = courses.map(course =>
      course.id === id ? { ...course, rating: newRating } : course
    );
    setCourses(updatedCourses);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.heading}>LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY COURSES</Text>
        {courses.map(course => (
          <CourseItem key={course.id} course={course} onRate={handleRateCourse} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  courseContainer: {
    marginBottom: 20,
  },
  courseDetails: {
    flexDirection: 'row', 
  },
  courseImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    marginRight: 10, 
  },
  textContainer: {
    flex: 1, 
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseDescription: {
    marginBottom: 10,
  },
  rateButton: {
    backgroundColor: 'white',
    padding: 6,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 40,
    marginBottom: 5,
    width:50,
  },
  heading:{
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'black',
    marginBottom:10,
    color:'white',
  }
});


