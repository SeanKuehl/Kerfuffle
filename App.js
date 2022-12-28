import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';

const App = () => {
	
	
	const [userInput, setUserInput] = useState('');
	
	  
	  
    
	
	handleChange = (event) => {
	  let value = event.target.input.value;
	  console.log(value);
	  
	}
	
	handleClick = () => {
		
        let textToKerfuffle = userInput;
		let arrayToKerfuffle = textToKerfuffle.split(" ");
		let numOfScrambles = 1000;
		
		
		for (let i = 0; i< numOfScrambles; i++){
			//gets random number from 0 to x-1
			let randomGetIndex = Math.floor(Math.random() * arrayToKerfuffle.length);
			let randomPutIndex = Math.floor(Math.random() * arrayToKerfuffle.length);
			let firstItem = arrayToKerfuffle[randomGetIndex];
			let secondItem = arrayToKerfuffle[randomPutIndex];
			
			//swap the items
			arrayToKerfuffle[randomGetIndex] = secondItem;
			arrayToKerfuffle[randomPutIndex] = firstItem;
			
		}
		
		let draftString = "";
		
		for (let i = 0; i< arrayToKerfuffle.length;i++){
			draftString = draftString.concat(" ", arrayToKerfuffle[i]);
		}
		
		setUserInput(draftString);
		
    }
	
	
    
  
	
	
  return (
	  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<View style={styles.ContainerStyle}>
		  <Text id={"title"} style={styles.TitleStyle}> Kerfuffle! </Text>
		  <Text style={styles.TextStyle}>
		  Welcome to Kerfuffle! Enter some song lyrics or other works into the space below and it'll be kerfuffled, Hopefully producing laughs and fun confusion when you try reading or singing it back. 
		  </Text>
		  <TextInput
			id="input"
			placeholder="enter text here"
			onChangeText={setUserInput}
			value={userInput}
			style={styles.InputStyle}
			multiline={true}
			onSubmit={Keyboard.dismiss}
		  />
		  <Button
			  onPress={handleClick}
			  title={'Press To Kerfuffle It!'}
			/>
		</View>
	  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  ContainerStyle: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleStyle: {
	  fontSize: 60,
	  color: '#ba55d3',
	  marginTop: 50,
	  
  },
  TextStyle: {
	  fontSize: 20,
	  width: 300,
	  marginTop: 50,
  },
  InputStyle: {
	  borderWidth: 1,
	  borderColor: "cornflowerblue",
	  width: 300,
	  height: 100,
	  textAlignVertical: 'top',
	  marginTop: 50,
  },
  
  
});

export default App;
