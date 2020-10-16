import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

let items = [
  "Hepsi",
  'Google',
  'TED',
  'GitHub',
  'Big Think',
  'Microsoft'
]
let items2 = [
  'Google',
  'TED'
]
let items3 = [
  'GitHub',
  'Big Think',
  'Microsoft'
]

export default Ara => {

  const [selectedMarka, setMarka] = useState()
  const [selectedModel, setModel] = useState()
  const [selectedYil, setYil] = useState()
  const [selectedVersiyon, setVersiyon] = useState()
  
  return (
    <div>
      <div className="container-arama">
        <div className="container-arama-list">
          <List
            items={items}
            onChange={selected => setMarka( selected )}
            selected={[selectedMarka]}
          />
        </div>
        <div className="container-arama-list">

          {!!selectedMarka &&
            <List
              items={items}
              onChange={selected => setModel( selected )}
              selected={[selectedModel]}
            />
          }
        </div>
        <div className="container-arama-list">

          {!!selectedMarka && !!selectedModel &&
            <List
              items={items}
              onChange={selected => setYil( selected )}
              selected={[selectedYil]}
            />
          }
        </div>
        <div className="container-arama-list">

          {!!selectedMarka && !!selectedModel && !!selectedYil &&
            <List
              items={items}
              onChange={selected => setVersiyon( selected )}
              selected={[selectedVersiyon]}
            />

          }
        </div>
      </div>
    </div>
  );
}
