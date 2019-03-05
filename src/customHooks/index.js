import {useEffect, useState} from 'react';
//a CUSTOM HOOK!
const useLocalStorage = (localStorageKey, defaultVal, cb) => {

  //NOTE: includes a wrapper fn to work with useState,
  // invoked ONCE  to get initial value. This changes localStorage performance for the better
  const initialValue = () => {

    //GET items from localStorage
    const storageVal = JSON.parse(window.localStorage.getItem(localStorageKey) || JSON.stringify(defaultVal));
    
    if(cb){
      cb(storageVal)
    }

    return storageVal
  }

  //get/set for EXISTING todos
  const [storageval, setStorageval] = useState(initialValue)

  /*
    WRITE todos to localstorage
    NOTE: arr @ end means ONLY run if 'todos' has changed
  */
  useEffect(() => {
    console.log('setting to local storage');
    window.localStorage.setItem(localStorageKey, JSON.stringify(storageval));
  }, [storageval])

  return [storageval, setStorageval]
}

//sets docTitle
const useDocTitle = passedTitle => {
  useEffect(() => {
    document.title = passedTitle;
  }, [passedTitle])
}

const useKeyDown = (srcObj, defaultValue) => {
  
  const [match, setMatch] = useState(defaultValue)

  useEffect(() => {
    
    const handleKeyPress = ({keyPressed}) => {
      setMatch(prevMatch => 
        Object.keys(srcObj).some(k => k == keyPressed) ? srcObj[keyPressed] : prevMatch
      );
    }

    document.addEventListener("keydown", handleKeyPress)

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [])
  return [match, setMatch]
}

export  {useLocalStorage, useDocTitle, useKeyDown};