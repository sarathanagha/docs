import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import data from '../data/data.json';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 'auto',
      paddingRight: '10px',
      width: '80%',
      height: '90vh',
      overflowY: 'scroll'
    },
    input: {
        margin: '20px 0 20px'
    }
  });
  

const List = () => {
    const classes = useStyles();
    const [searchText, updateText] = useState('');
    const [questions, updateQuestions] = useState([]);
    const handleChange = (event) => {
        updateText(event.target.value);
    };

    useEffect(()=>{
        let ques = Object.keys(data).reduce((acc, technology)=>{
            return [ ...acc, ...data[technology] ]
        }, []).filter((question)=>{
            if(searchText && searchText!=='') {
                return question.q.toLowerCase().includes(searchText.toLowerCase());
            } else {
                return true;
            }
        });
        updateQuestions(ques);
    }, [searchText]);

    return (<div className={classes.root}>
        <TextField classes={{root: classes.input}} id="standard-name" label="Search" value={searchText} onChange={handleChange} variant="filled"/>
        {
            questions.map((question)=>{
                return (<ListItem question={question}/>)
            })
        }
    </div>) 
}

export default List;