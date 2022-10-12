import React, { useState } from "react";
import { Container, Box, Button, Heading,FormControl, FormLabel, Input, Text, VStack, HStack } from "@chakra-ui/react"
import "./Form.css"

const Form = () => {
    const [step,setStep]=useState(0);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
   

    const HandleSteps=(e)=>{
        e.preventDefault();
      if(step===0){
        if(name==="") alert("Please Fill Name") 
        if(surname==="") alert("Please fill Surname") 
        else setStep(cur => cur + 1)
      }
      else if(step === 1){
        if(mobile.length !== 10) alert("Please Fill Proper Mobile Number") 
        else setStep(cur => cur + 1)
      }
      else if(step===2){
        if(email === "" || !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) alert("Please Fill your Email correctly")
        else setStep(cur => cur + 1) 
      }
      else if(step===3){  
        if(username==="") alert("Please Fill Username")
        if(pass==="" || pass.length < 5) alert("Please Fill Proper Password")
        else setStep(cur => cur + 1) 
       
      }else{
        setStep(cur => cur + 1)
      }
    }
    const renderButton=()=>{
        if(step > 3 && step!==4){
            return undefined
        }else if(step ===3){
            return (
                <Button onClick={HandleSteps} type="button">Create Account</Button>
            )
        }else if(step ===4){
          return (
              <Button onClick={HandleSteps} type="button">View Details</Button>
          )
        }else{
            return (
                <Button onClick={HandleSteps} type="button">Next Step</Button>
            )
        }
    }
    const handelBack=(e)=>{
      e.preventDefault();
      setStep(cur=>cur-1)
    }
   
  return (
    < Container >
   
      <Box >
        <Box  className="main">
          <FormControl>
            {step ===0 && (
              <Box>
                <Heading className="head">Personal Information</Heading>
                <FormLabel >Name</FormLabel>
                <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <FormLabel >Surname</FormLabel>
                <Input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)}/>
              </Box>
            )}

            {step ===1 && (
              <Box>
                 <Heading className="head">Mobile Number</Heading>
                 <FormLabel>Mobile Number</FormLabel>
                 <Input type="number" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
              
              </Box>
            )}

            {step ===2 && (
              <Box>
                 <Heading className="head">Email Id</Heading>
                 <FormLabel>Email Id</FormLabel>
                 <Input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </Box>
            )}

            {step ===3 && (
              <Box>
                 <Heading className="head">Register</Heading>
                 <FormLabel >Username</FormLabel>
                 <Input type="text"  name="username"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
                 <FormLabel >Password</FormLabel>
                 <Input type="password" name="pass"  value={pass} onChange={(e)=>setPass(e.target.value)}/>
              </Box>
            )}<br/>

            {step === 4 && (
              <Box>
                 <Heading  className="head">Congratulations!</Heading>
                 <Text fontSize='xl'>Account Created Sucessfully :)</Text>
              </Box>
            )}

            {step ===5 && (
              <Box>
                 <Heading className="head">User Details</Heading>
                 <VStack >
                  <Text fontSize='xl'>Name : {name}</Text>
                  <Text fontSize='xl'>Surname : {surname}</Text>
                  <Text fontSize='xl'>Username : {username}</Text>
                  <Text fontSize='xl'>Mobile No: {mobile}</Text>
                  <Text fontSize='xl'>Email Id: {email}</Text>
                 </VStack>
              </Box>
            )}
            <HStack className="butt">
            <Box onClick={(e)=>handelBack(e)} className="prev">{step > 0 ? "Previous":""}</Box>
            {renderButton()}
            </HStack>
          </FormControl>
        </Box>
      </Box>
    </ Container>
  );
};

export default Form;