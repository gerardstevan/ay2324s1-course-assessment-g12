import QuestionList from '../components/QuestionList';
import CategoryMenu from '../components/CategoryMenu';
import LevelMenu from '../components/LevelMenu';
import ListMenu from '../components/ListMenu';
import { useState } from 'react';
import '../style/QuestionPage.css';

function QuestionPage() {

  const [selectedCategory, setSelectedCategory] = useState([]); // Default value
  const [selectedLevel, setSelectedLevel] = useState('All Levels'); // Default value
  const [selectedList, setSelectedList] = useState('List All'); // Default value
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    console.log(level);
  };

  const handleListChange = (list) => {
    setSelectedList(list);
    console.log(list);
  };

  return (
    <div className="App">
      <div className="Question-header">
        <div className="menu-item-div"> 
        <div className='menu-item'><CategoryMenu selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}/></div>
        <div className='menu-item'><LevelMenu selectedLevel={selectedLevel} onLevelChange={handleLevelChange}/></div>
        <div className='menu-item'><ListMenu selectedList={selectedList} onListChange={handleListChange}/></div>
        </div>        
        <QuestionList selectedCategory={selectedCategory} selectedLevel={selectedLevel} selectedList={selectedList}/>
      </div>
      </div>
  );
}

export default QuestionPage;
