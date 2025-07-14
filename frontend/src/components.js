import React, { useState } from 'react';

// Icons (using SVG for better performance)
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const TrendingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const SubscriptionsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const LibraryIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const HistoryIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const ThumbsUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
  </svg>
);

const ThumbsDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

const SaveIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const NotificationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5H9l-5 5h5a3 3 0 006 0z" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const Header = ({ darkMode, setDarkMode, onSearch, onLogoClick, toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b`}>
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-600'}`}
          >
            <MenuIcon />
          </button>
          <button
            onClick={onLogoClick}
            className="flex items-center space-x-1 text-xl font-bold"
          >
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <PlayIcon />
            </div>
            <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
              YouTube
            </span>
          </button>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className={`w-full py-2 px-4 rounded-l-full border ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:border-blue-500`}
              />
            </div>
            <button
              type="submit"
              className={`px-6 py-2 rounded-r-full border border-l-0 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                  : 'bg-gray-50 border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <SearchIcon />
            </button>
          </form>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-600'}`}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-600'}`}>
            <VideoIcon />
          </button>
          <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-600'}`}>
            <NotificationIcon />
          </button>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const Sidebar = ({ darkMode, isOpen, currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: HomeIcon, active: currentView === 'home' },
    { id: 'trending', label: 'Trending', icon: TrendingIcon, active: currentView === 'trending' },
    { id: 'subscriptions', label: 'Subscriptions', icon: SubscriptionsIcon, active: currentView === 'subscriptions' },
    { id: 'library', label: 'Library', icon: LibraryIcon, active: currentView === 'library' },
    { id: 'history', label: 'History', icon: HistoryIcon, active: currentView === 'history' },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full z-40 transition-all duration-300 ${
      isOpen ? 'w-60' : 'w-16'
    } ${darkMode ? 'bg-gray-900' : 'bg-white'} border-r ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <nav className="py-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center space-x-6 px-4 py-3 hover:bg-gray-100 ${
              darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-700'
            } ${item.active ? (darkMode ? 'bg-gray-800' : 'bg-gray-100') : ''}`}
          >
            <item.icon />
            {isOpen && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
        
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2">
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                SUBSCRIPTIONS
              </h3>
            </div>
            <div className="space-y-1">
              {['GameMaster Pro', 'MusicVibes', 'TechWorld', 'CookingMaster'].map((channel) => (
                <button
                  key={channel}
                  className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 ${
                    darkMode ? 'hover:bg-gray-800 text-white' : 'text-gray-700'
                  }`}
                >
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  <span className="text-sm">{channel}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
};

const VideoCard = ({ video, darkMode, onVideoSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onVideoSelect(video)}
    >
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover rounded-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <div className="text-white">
              <PlayIcon />
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-3 flex space-x-3">
        <img
          src={video.channelAvatar}
          alt={video.channel}
          className="w-9 h-9 rounded-full"
        />
        <div className="flex-1">
          <h3 className={`font-medium text-sm line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {video.title}
          </h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
            {video.channel}
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {video.views} views • {video.uploadTime}
          </p>
        </div>
      </div>
    </div>
  );
};

const VideoGrid = ({ videos, darkMode, onVideoSelect }) => {
  return (
    <div className="pt-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            darkMode={darkMode}
            onVideoSelect={onVideoSelect}
          />
        ))}
      </div>
    </div>
  );
};

const VideoPlayer = ({ video, darkMode, comments, relatedVideos, onVideoSelect }) => {
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main video section */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={video.videoUrl}
                title={video.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-4">
              <h1 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {video.title}
              </h1>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-4">
                  <img
                    src={video.channelAvatar}
                    alt={video.channel}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {video.channel}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      1.2M subscribers
                    </p>
                  </div>
                  <button
                    onClick={() => setSubscribed(!subscribed)}
                    className={`px-4 py-2 rounded-full font-medium ${
                      subscribed
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {subscribed ? 'Subscribed' : 'Subscribe'}
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      liked
                        ? 'bg-blue-100 text-blue-600'
                        : darkMode
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <ThumbsUpIcon />
                    <span>{video.likes}</span>
                  </button>
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    <ThumbsDownIcon />
                  </button>
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    <ShareIcon />
                    <span>Share</span>
                  </button>
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    <SaveIcon />
                    <span>Save</span>
                  </button>
                </div>
              </div>
              
              <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="flex items-center space-x-4 text-sm">
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {video.views} views
                  </span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {video.uploadTime}
                  </span>
                </div>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${
                  showDescription ? '' : 'line-clamp-2'
                }`}>
                  {video.description}
                </p>
                <button
                  onClick={() => setShowDescription(!showDescription)}
                  className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-blue-600`}
                >
                  {showDescription ? 'Show less' : 'Show more'}
                </button>
              </div>
            </div>
            
            {/* Comments section */}
            <div className="mt-6">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Comments
              </h3>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} darkMode={darkMode} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Related videos sidebar */}
          <div className="lg:col-span-1">
            <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Related Videos
            </h3>
            <div className="space-y-3">
              {relatedVideos.slice(0, 10).map((relatedVideo) => (
                <div
                  key={relatedVideo.id}
                  className="flex space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2"
                  onClick={() => onVideoSelect(relatedVideo)}
                >
                  <img
                    src={relatedVideo.thumbnail}
                    alt={relatedVideo.title}
                    className="w-40 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className={`text-sm font-medium line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {relatedVideo.title}
                    </h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                      {relatedVideo.channel}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {relatedVideo.views} views • {relatedVideo.uploadTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Comment = ({ comment, darkMode }) => {
  return (
    <div className="flex space-x-3">
      <img
        src={comment.avatar}
        alt={comment.user}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {comment.user}
          </h4>
          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {comment.time}
          </span>
        </div>
        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {comment.text}
        </p>
        <div className="flex items-center space-x-4 mt-2">
          <button className={`flex items-center space-x-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-blue-600`}>
            <ThumbsUpIcon />
            <span>{comment.likes}</span>
          </button>
          <button className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-blue-600`}>
            <ThumbsDownIcon />
          </button>
          <button className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-blue-600`}>
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchResults = ({ videos, searchQuery, darkMode, onVideoSelect }) => {
  return (
    <div className="pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          Search results for "{searchQuery}"
        </h2>
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex space-x-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-4"
              onClick={() => onVideoSelect(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-60 h-36 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {video.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                  {video.views} views • {video.uploadTime}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <img
                    src={video.channelAvatar}
                    alt={video.channel}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {video.channel}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} line-clamp-2`}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Components = {
  Header,
  Sidebar,
  VideoGrid,
  VideoPlayer,
  VideoCard,
  Comment,
  SearchResults
};

export default Components;