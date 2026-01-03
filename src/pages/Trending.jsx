import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import MusicPlayer from '../components/MusicPlayer'
import Footer from '../components/Footer'
import { useMusic } from '../context/MusicContext'
import '../styles/index.css'
import '../styles/trending.css'

// Import artist images
import darshanImg from '../Artist/darshan.jpeg'
import arijitImg from '../Artist/arijit singh.jpeg'
import jubinImg from '../Artist/jubin nautiyal.jpeg'
import gajendraImg from '../Artist/gajendra verma.jpeg'
import anuvImg from '../Artist/Anuv Jain.jpg'

// Import song images
import arzKiyaHaiImg from '../songs/arz kiya hai.jpg'
import mahiyeJinnaImg from '../songs/mahiye jinna sohna.jpg'
import aabaadBarbadImg from '../songs/aabad barbad.jpg'

const Trending = () => {
  const { setPlaylistAndPlay, currentSong, isPlaying } = useMusic()
  const [activeFilter, setActiveFilter] = useState('all')

  const [trendingSongs] = useState([
    {
      id: 1,
      title: 'Arz Kiya Hai',
      artist: 'Coke Studio',
      image: arzKiyaHaiImg,
      audio: 'Arz Kiya Hai _ Coke Studio Bharat - (Raag.Fm) (1).mp3',
      plays: '2.5M',
      duration: '4:32',
      trend: 'up',
      genre: 'Classical'
    },
    {
      id: 2,
      title: 'Jhol',
      artist: 'Diljit Dosanjh',
      image: darshanImg,
      audio: 'Jhol(KoshalWorld.Com).mp3',
      plays: '3.2M',
      duration: '3:45',
      trend: 'up',
      genre: 'Punjabi'
    },
    {
      id: 3,
      title: 'Mahiye Jinna Sohna',
      artist: 'Diljit Dosanjh',
      image: mahiyeJinnaImg,
      audio: 'Mahiye Jinna Sohna_320(PagalWorld.com.sb).mp3',
      plays: '4.1M',
      duration: '3:58',
      trend: 'up',
      genre: 'Punjabi'
    },
    {
      id: 4,
      title: 'Barbaad',
      artist: 'Jubin Nautiyal',
      image: jubinImg,
      audio: 'Barbaad Saiyaara 320 Kbps.mp3',
      plays: '1.8M',
      duration: '4:15',
      trend: 'same',
      genre: 'Romantic'
    },
    {
      id: 5,
      title: 'Aabaad Barbaad',
      artist: 'Arijit Singh',
      image: aabaadBarbadImg,
      audio: 'Aabaad Barbaad - Arijit Singh.mp3',
      plays: '5.6M',
      duration: '4:20',
      trend: 'up',
      genre: 'Romantic'
    },
    {
      id: 6,
      title: 'Saiyaara',
      artist: 'Mohit Chauhan',
      image: arijitImg,
      audio: 'Title Track Saiyaara 320 Kbps.mp3',
      plays: '2.9M',
      duration: '5:10',
      trend: 'down',
      genre: 'Romantic'
    },
    {
      id: 7,
      title: 'Baarishon Mein',
      artist: 'Darshan Raval',
      image: darshanImg,
      audio: 'Baarishon Mein Darshan Raval 320 Kbps.mp3',
      plays: '3.7M',
      duration: '3:22',
      trend: 'up',
      genre: 'Pop'
    },
    {
      id: 8,
      title: 'Hawa Banke',
      artist: 'Darshan Raval',
      image: darshanImg,
      audio: 'Hawa Banke - Darshan Raval-(PagalWorld.Ink).mp3',
      plays: '4.5M',
      duration: '3:50',
      trend: 'up',
      genre: 'Pop'
    },
    {
      id: 9,
      title: 'Tera Ho Gaya',
      artist: 'Atif Aslam',
      image: arijitImg,
      audio: 'Tera Ho Gaya_320(PagalWorld.com.sb).mp3',
      plays: '2.1M',
      duration: '4:05',
      trend: 'same',
      genre: 'Romantic'
    },
    {
      id: 10,
      title: 'Asal Mein',
      artist: 'Darshan Raval',
      image: darshanImg,
      audio: 'Asal Mein Asal Mein Single 320 Kbps.mp3',
      plays: '3.3M',
      duration: '3:40',
      trend: 'up',
      genre: 'Pop'
    }
  ])

  const [trendingArtists] = useState([
    {
      id: 1,
      name: 'Darshan Raval',
      image: darshanImg,
      songs: 25,
      followers: '5.2M',
      verified: true,
      rank: 1
    },
    {
      id: 2,
      name: 'Arijit Singh',
      image: arijitImg,
      songs: 150,
      followers: '12.8M',
      verified: true,
      rank: 2
    },
    {
      id: 3,
      name: 'Jubin Nautiyal',
      image: jubinImg,
      songs: 45,
      followers: '3.9M',
      verified: true,
      rank: 3
    },
    {
      id: 4,
      name: 'Gajendra Verma',
      image: gajendraImg,
      songs: 30,
      followers: '2.1M',
      verified: true,
      rank: 4
    },
    {
      id: 5,
      name: 'Anuv Jain',
      image: anuvImg,
      songs: 20,
      followers: '1.5M',
      verified: true,
      rank: 5
    }
  ])

  const handleSongClick = (song, index) => {
    setPlaylistAndPlay(trendingSongs, index)
  }

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <i className="fas fa-arrow-up trend-up"></i>
    if (trend === 'down') return <i className="fas fa-arrow-down trend-down"></i>
    return <i className="fas fa-minus trend-same"></i>
  }

  return (
    <div className="trending-page">
      <Navbar />

      {/* Hero Banner */}
      <div className="trending-hero">
        <div className="trending-hero-overlay"></div>
        <div className="trending-hero-content">
          <div className="trending-badge">
            <i className="fas fa-fire"></i>
            <span>HOT THIS WEEK</span>
          </div>
          <h1 className="trending-hero-title">
            <span className="gradient-text">Trending Now</span>
          </h1>
          <p className="trending-hero-subtitle">
            Discover the hottest tracks and artists dominating the charts
          </p>
          <div className="trending-stats">
            <div className="stat-item">
              <i className="fas fa-music"></i>
              <div>
                <h3>{trendingSongs.length}</h3>
                <p>Hot Tracks</p>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-star"></i>
              <div>
                <h3>{trendingArtists.length}</h3>
                <p>Top Artists</p>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-headphones"></i>
              <div>
                <h3>25M+</h3>
                <p>Total Plays</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="suggested-songs">

          {/* Trending Artists Section */}
          <div className="section-container animate-on-scroll">
            <div className="section-header">
              <h3 className="section-title" style={{ fontSize: '2.5rem' }}>
                <i className="fas fa-star"></i>
                <span>Popular Artists</span>
              </h3>
              <p className="section-subtitle">The most talented artists of the moment</p>
            </div>
            <div className="artist-sec">
              {trendingArtists.map((artist, index) => (
                <div key={artist.id} className="artist-contain" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="artist-rank-badge">#{artist.rank}</div>
                  <div
                    className={`artist-card${index + 1}`}
                    style={{ backgroundImage: `url(${artist.image})` }}
                  >
                    <div className="artist-overlay">
                      <i className="fas fa-play-circle"></i>
                    </div>
                  </div>
                  <div className="artist-info">
                    <h3>
                      {artist.name}
                      {artist.verified && <i className="fas fa-check-circle verified-badge"></i>}
                    </h3>
                    <div className="artist-stats">
                      <span><i className="fas fa-music"></i> {artist.songs} songs</span>
                      <span><i className="fas fa-users"></i> {artist.followers}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Songs Section */}
          <div className="section-container animate-on-scroll">
            <div className="section-header">
              <h3 className="section-title" style={{ fontSize: '2.5rem' }}>
                <i className="fas fa-music"></i>
                <span>Trending Songs</span>
              </h3>
              <p className="section-subtitle">Collections for every mood</p>
            </div>

            {/* Filter Buttons */}
            <div className="filter-buttons">
              <button
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                <i className="fas fa-th"></i> All
              </button>
              <button
                className={`filter-btn ${activeFilter === 'Romantic' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Romantic')}
              >
                <i className="fas fa-heart"></i> Romantic
              </button>
              <button
                className={`filter-btn ${activeFilter === 'Pop' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Pop')}
              >
                <i className="fas fa-star"></i> Pop
              </button>
              <button
                className={`filter-btn ${activeFilter === 'Punjabi' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Punjabi')}
              >
                <i className="fas fa-drum"></i> Punjabi
              </button>
              <button
                className={`filter-btn ${activeFilter === 'Classical' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Classical')}
              >
                <i className="fas fa-music"></i> Classical
              </button>
            </div>

            <div className="songs-sec">
              {trendingSongs
                .filter(song => activeFilter === 'all' || song.genre === activeFilter)
                .map((song, index) => {
                const isCurrentSong = currentSong && currentSong.id === song.id
                return (
                  <div key={song.id} className="songs-contain" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="song-rank-badge">
                      <span className="rank-number">#{index + 1}</span>
                      {getTrendIcon(song.trend)}
                    </div>
                    <div
                      className={`songs-card${(index % 6) + 1} ${isCurrentSong ? 'active' : ''}`}
                      id="suggest-song"
                      onClick={() => handleSongClick(song, index)}
                      style={{
                        backgroundImage: `url(${song.image})`
                      }}
                    >
                      <div className="play-overlay">
                        <i className={`fas fa-${isCurrentSong && isPlaying ? 'pause' : 'play'}-circle`}></i>
                      </div>
                      {isCurrentSong && isPlaying && (
                        <div className="now-playing-badge">
                          <i className="fas fa-volume-up"></i> Playing
                        </div>
                      )}
                      <div className="song-stats-overlay">
                        <span><i className="fas fa-play"></i> {song.plays}</span>
                        <span><i className="fas fa-clock"></i> {song.duration}</span>
                      </div>
                    </div>
                    <div className="song-card-info">
                      <h3 className={isCurrentSong ? 'active' : ''}>
                        {song.title}
                      </h3>
                      <p className="artist-name">{song.artist}</p>
                      <span className="genre-tag">{song.genre}</span>
                    </div>
                    <button
                      className="add-to-playlist-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log('Add to playlist:', song)
                      }}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <MusicPlayer />
    </div>
  )
}

export default Trending

