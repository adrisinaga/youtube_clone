import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Components from './components';

const {
  Header,
  Sidebar,
  VideoGrid,
  VideoPlayer,
  VideoCard,
  Comment,
  ChannelRow,
  SearchResults
} = Components;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock video data
  const mockVideos = [
    {
      id: 1,
      title: "Epic Gaming Moments - Best Highlights 2025",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxnYW1pbmd8ZW58MHx8fHwxNzUyNDA4MjcyfDA&ixlib=rb-4.1.0&q=85",
      views: "2.5M",
      uploadTime: "2 days ago",
      channel: "GameMaster Pro",
      channelAvatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      duration: "12:45",
      description: "Watch the most epic gaming moments from 2025! From incredible victories to hilarious fails, this compilation has it all.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      likes: "125K",
      category: "Gaming"
    },
    {
      id: 2,
      title: "Latest Music Hits 2025 - Top 50 Songs",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxtdXNpY3xlbnwwfHx8fDE3NTIzOTQ4NjR8MA&ixlib=rb-4.1.0&q=85",
      views: "5.2M",
      uploadTime: "1 week ago",
      channel: "MusicVibes",
      channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      duration: "3:42",
      description: "Discover the hottest music tracks of 2025! From pop to hip-hop, electronic to indie - we've got all the trending songs.",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      likes: "89K",
      category: "Music"
    },
    {
      id: 3,
      title: "Revolutionary Tech Innovations That Will Change Everything",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MXwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5fGVufDB8fHx8MTc1MjQ3NjYxMnww&ixlib=rb-4.1.0&q=85",
      views: "1.8M",
      uploadTime: "3 days ago",
      channel: "TechWorld",
      channelAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      duration: "18:22",
      description: "Explore the cutting-edge technology innovations that are reshaping our world in 2025.",
      videoUrl: "https://www.youtube.com/embed/fC4HiTxJbP0",
      likes: "67K",
      category: "Technology"
    },
    {
      id: 4,
      title: "Master Chef's Secret Cooking Techniques",
      thumbnail: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nfGVufDB8fHx8MTc1MjQxNDEwMHww&ixlib=rb-4.1.0&q=85",
      views: "923K",
      uploadTime: "5 days ago",
      channel: "CookingMaster",
      channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      duration: "25:15",
      description: "Learn professional cooking techniques from world-renowned chefs. Perfect your culinary skills with these expert tips.",
      videoUrl: "https://www.youtube.com/embed/wD79NZroV88",
      likes: "45K",
      category: "Food"
    },
    {
      id: 5,
      title: "Ultimate Sports Highlights 2025 - Best Moments",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzcG9ydHN8ZW58MHx8fHwxNzUyNDQ3NzcwfDA&ixlib=rb-4.1.0&q=85",
      views: "3.1M",
      uploadTime: "1 day ago",
      channel: "SportsCenter",
      channelAvatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      duration: "15:30",
      description: "Experience the most thrilling sports moments from around the world. From football to tennis, basketball to track and field.",
      videoUrl: "https://www.youtube.com/embed/TcMBFSGVi1c",
      likes: "156K",
      category: "Sports"
    },
    {
      id: 6,
      title: "Learn Python Programming - Complete Beginner Guide",
      thumbnail: "https://images.unsplash.com/photo-1699347914988-c61ec13c99c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbHxlbnwwfHx8fDE3NTI0NzY2MzR8MA&ixlib=rb-4.1.0&q=85",
      views: "2.9M",
      uploadTime: "2 weeks ago",
      channel: "CodeAcademy",
      channelAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      duration: "45:12",
      description: "Master Python programming from scratch! Complete tutorial covering variables, functions, loops, and more.",
      videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
      likes: "234K",
      category: "Education"
    },
    {
      id: 7,
      title: "Retro Gaming Setup - Building the Ultimate Gaming Room",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxnYW1pbmd8ZW58MHx8fHwxNzUyNDA4MjcyfDA&ixlib=rb-4.1.0&q=85",
      views: "1.2M",
      uploadTime: "4 days ago",
      channel: "RetroGamer",
      channelAvatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      duration: "22:08",
      description: "Transform your space into the ultimate retro gaming paradise! Tips, tricks, and setup ideas for every budget.",
      videoUrl: "https://www.youtube.com/embed/J3xLuZtDF_w",
      likes: "78K",
      category: "Gaming"
    },
    {
      id: 8,
      title: "Studio Recording Session - Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxtdXNpY3xlbnwwfHx8fDE3NTIzOTQ4NjR8MA&ixlib=rb-4.1.0&q=85",
      views: "567K",
      uploadTime: "6 days ago",
      channel: "StudioLife",
      channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      duration: "8:33",
      description: "Go behind the scenes of a professional music recording session. See how the magic happens!",
      videoUrl: "https://www.youtube.com/embed/UfvjHlhIzb8",
      likes: "34K",
      category: "Music"
    }
  ];

  const mockComments = [
    {
      id: 1,
      user: "TechEnthusiast",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      text: "This is absolutely incredible! The quality of this content is outstanding. Thank you for sharing!",
      time: "2 hours ago",
      likes: 45
    },
    {
      id: 2,
      user: "GameMaster99",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      text: "Finally someone who explains things clearly! Keep up the great work.",
      time: "5 hours ago",
      likes: 23
    },
    {
      id: 3,
      user: "CreativeSoul",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTc1MjQwNzA5NHww&ixlib=rb-4.1.0&q=85",
      text: "I've been waiting for content like this! More please! 🔥",
      time: "1 day ago",
      likes: 67
    }
  ];

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setCurrentView('video');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentView('search');
  };

  const handleLogoClick = () => {
    setCurrentView('home');
    setSelectedVideo(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const filteredVideos = searchQuery
    ? mockVideos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockVideos;

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            onSearch={handleSearch}
            onLogoClick={handleLogoClick}
            toggleSidebar={toggleSidebar}
          />
          
          <div className="flex">
            <Sidebar
              darkMode={darkMode}
              isOpen={sidebarOpen}
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
            
            <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-16'}`}>
              <Routes>
                <Route path="/" element={
                  currentView === 'video' && selectedVideo ? (
                    <VideoPlayer
                      video={selectedVideo}
                      darkMode={darkMode}
                      comments={mockComments}
                      relatedVideos={mockVideos.filter(v => v.id !== selectedVideo.id)}
                      onVideoSelect={handleVideoSelect}
                    />
                  ) : currentView === 'search' ? (
                    <SearchResults
                      videos={filteredVideos}
                      searchQuery={searchQuery}
                      darkMode={darkMode}
                      onVideoSelect={handleVideoSelect}
                    />
                  ) : (
                    <VideoGrid
                      videos={filteredVideos}
                      darkMode={darkMode}
                      onVideoSelect={handleVideoSelect}
                    />
                  )
                } />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;