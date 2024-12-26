import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const committeeMembers = {
  chiefPatron: {
    name: 'D C Nageswarao',
    image: 'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20C.%20Nageswara%20Rao.png', 
  },
  patrons: [
    { name: 'Dr. K. Prashanth Kumar', image: 'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20K.%20Prashanth%20Kumar.png' }, 
    { name: 'Dr. P. Sudhakar', image: 'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20P.%20Sudhakar.png' },
    { name: 'Dr. K. S. N Chary', image: 'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20K.S.N%20Chary.png' },
    {name:'Dr. C. Visweswara Rao', image:'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20C.Visweswara%20Rao.png'}
  ],
  advisiors: [
    { name: 'Dr. K. Vijay Kumar', image: 'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20K.%20Vijay%20Kumar.png' }, 
    { name: 'Dr. G. Srinivasa Rao', image: 'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20G.%20Srinivasa%20Rao.png' },
    { name: 'Dr. P. Srimannarayana', image: 'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20P.%20Srimannarayana.png' },
    {name:'Dr. A. V. Krishna Kishore', image:'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.%20A.V.%20Krishna%20Kishore.png'}
  ],
  CommitteeMembers: [
    {name:'Dr. K. Bhargav Reddy', image:'https://szusicon2025vijayawada.com/assets/images/usicon/committee/DR.%20K.%20Bhargav%20Reddy.png'},
    {name:'Dr. V. Suresh Babu', image:'https://szusicon2025vijayawada.com/assets/images/usicon/committee/DR.%20V.%20Suresh%20Babu.png'},
    {name:'Dr. Siva Sai Bharadwaj', image:'https://szusicon2025vijayawada.com/assets/images/usicon/committee/DR.Siva%20Sai%20Bharadwaj.png'},
    {name:'Dr. D. Trivedi', image:'https://szusicon2025vijayawada.com/assets/images/usicon/committee/Dr.D.%20Trivedi.png'}
  ]
};

const Committee = () => {
    
    return (
      <ScrollView style={styles.container}>
        {/* Chief Patron Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Chief Patron</Text>
          <View style={styles.memberContainer}>
            <Image source={{ uri: committeeMembers.chiefPatron.image }} style={styles.memberImage} />
            <Text style={styles.memberName}>{committeeMembers.chiefPatron.name}</Text>
          </View>
        </View>
  
        {/* Patron Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Patron</Text>
          <View style={styles.patronContainer}>
            {committeeMembers.patrons.map((patron, index) => (
              <View key={index} style={styles.memberContainer}>
                <Image source={{ uri: patron.image }} style={styles.memberImage} />
                <Text style={styles.memberName}>{patron.name}</Text>
              </View>
            ))}
          </View>
        </View>
  
        {/* Advisors Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Advisors</Text>
          <View style={styles.patronContainer}>
            {committeeMembers.advisiors.map((patron, index) => (
              <View key={index} style={styles.memberContainer}>
                <Image source={{ uri: patron.image }} style={styles.memberImage} />
                <Text style={styles.memberName}>{patron.name}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* committe  Section */}
        <View style={styles.section}>
          <Text style={styles.headingofcommite}>Committee Members</Text>
          <View style={styles.patronContainer}>
            {committeeMembers.CommitteeMembers.map((patron, index) => (
              <View key={index} style={styles.memberContainer}>
                <Image source={{ uri: patron.image }} style={styles.memberImage} />
                <Text style={styles.memberName}>{patron.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  };
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    section: {
      marginBottom: 30,
    },
    heading: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10,
        color: '#dc7633', 
        textAlign: 'center',
        alignSelf: 'center', 
        width: '60%', 
        borderWidth: 1, 
        borderColor: '#ba916a',
        paddingVertical: 0, 
        paddingHorizontal: 20,
        borderRadius: 5, 
        overflow: 'hidden', 
        backgroundColor: '#f7e4d5', 
      },
      headingofcommite:{
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10,
        color: '#dc7633', 
        textAlign: 'center',
        alignSelf: 'center', 
        width: '90%', 
        borderWidth: 1, 
        borderColor: '#ba916a',
        paddingVertical: 0, 
        paddingHorizontal: 20,
        borderRadius: 5, 
        overflow: 'hidden', 
        backgroundColor: '#f7e4d5', 


      },
      
      
    memberContainer: {
      alignItems: 'center',
      marginBottom: 15,
    },
    memberImage: {
      width: 120,
      height: 120,
      borderRadius: 60,          
      marginBottom: 10,          
      borderWidth: 3,            
      borderColor: '#007BFF',    
      shadowColor: '#000',       
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.2,       
      shadowRadius: 4,           
      elevation: 5,     
    },
    memberName: {
        fontSize: 16,
        fontWeight: 'bold', 
        color: '#333',
        textAlign: 'center',
        marginTop: 5, 
        textShadowColor: '#aaa', 
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        letterSpacing: 0.5, 
      },
      
    patronContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  });
  
  

export default Committee;
