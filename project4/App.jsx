import { useState } from 'react'
import HobbyCard from './HobbyCard.jsx';

function App() {
  return (
            <div className="hobby-section">
                <h2>Student Hobbies</h2>
                <div className="hobby-container">
                    <HobbyCard 
                        hobbyName="Photography"
                        description="Capturing beautiful moments through the lens"
                        image="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400&h=300&fit=crop"
                    />
                    <HobbyCard 
                        hobbyName="Painting"
                        description="Expressing creativity with colors and brushes"
                        image="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop"
                    />
                    <HobbyCard 
                        hobbyName="Gardening"
                        description="Growing plants and connecting with nature"
                        image="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop"
                    />
                    <HobbyCard 
                        hobbyName="Cooking"
                        description="Creating delicious meals from around the world"
                        image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop"
                    />
                    <HobbyCard 
                        hobbyName="Reading"
                        description="Exploring different worlds through books"
                        image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop"
                    />
                    <HobbyCard 
                        hobbyName="Traveling"
                        description="Exploring new places and cultures"
                        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
                    />
                </div>
            </div>
  );
}

export default App