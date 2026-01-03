import { useState } from 'react'
import { useMusic } from '../context/MusicContext'
import { FaPlay, FaPause, FaChevronDown, FaChevronUp } from 'react-icons/fa'

// Import playlist images
import arijitCollectionImg from '../playlist/arijit collection/arijit collection.jpeg'
import ninetysSongsImg from '../playlist/90s songs/90s song.jpg'
import cokeStudioImg from '../playlist/coke studio/coke studio.jpg'
import oldHindiImg from '../playlist/old songs/old song.jpg'
import southIndianImg from '../playlist/south songs/south songs.jpg'
import urduCollectionImg from '../playlist/urdu songs/Urdu song.jpg'

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

const PlaylistSection = () => {
  const { playSong, setPlaylistAndPlay, currentSong, isPlaying } = useMusic()
  const [expandedPlaylist, setExpandedPlaylist] = useState(null)

  const [playlists] = useState([
    {
      id: 1,
      name: 'Arijit Collection',
      image: arijitCollectionImg,
      songs: [
        { id: 101, title: 'Chal Ghar Chalen', artist: 'Arijit Singh', audio: 'src/playlist/arijit collection/01 - Chal Ghar Chalen - DownloadMing.SE.mp3', duration: '4:32' },
        { id: 102, title: 'Aabaad Barbaad', artist: 'Arijit Singh', audio: 'src/playlist/arijit collection/Aabaad Barbaad - Arijit Singh.mp3', duration: '4:20' },
        { id: 103, title: 'Arz Kiya Hai', artist: 'Coke Studio', audio: 'src/playlist/arijit collection/Arz Kiya Hai _ Coke Studio Bharat - (Raag.Fm) (1).mp3', duration: '4:15' },
        { id: 104, title: 'Aur Mohabbat Kitni Karoon', artist: 'Arijit Singh', audio: 'src/playlist/arijit collection/Aur Mohabbat Kitni Karoon - Metro In Dino 320 Kbps.mp3', duration: '3:58' },
        { id: 105, title: 'Bairiya', artist: 'Arijit Singh', audio: 'src/playlist/arijit collection/Bairiya Arijit Singh 320 Kbps.mp3', duration: '4:45' },
        { id: 106, title: 'Chaleya', artist: 'Arijit Singh', audio: 'src/playlist/arijit collection/Chaleya - Jawan-(DJMaza).mp3', duration: '3:42' },
        { id: 107, title: 'Hardum Humdum', artist: 'Arijit Singh', audio: 'src/playlist/arijit collection/Hardum Humdum - Arijit Singh.mp3', duration: '4:10' },
        { id: 108, title: 'Chahun Main Ya Naa', artist: 'Arijit Singh', audio: 'src/playlist/arijit collection/new_128_03 - Chahun Main Ya Naa - PagalSongs.com.mp3', duration: '3:55' },
        { id: 109, title: 'Hum Mar Jayenge', artist: 'Arijit Singh', audio: 'src/playlist/arijit collection/new_128_04 - Hum Mar Jayenge - PagalSongs.com.mp3', duration: '4:28' }
      ]
    },
    {
      id: 2,
      name: '90s Songs',
      image: ninetysSongsImg,
      songs: [
        { id: 201, title: 'Bahut Jatate Ho Chah Humse', artist: 'Kumar Sanu', audio: 'src/playlist/90s songs/Bahut Jatate Ho Chah Humse(KoshalWorld.Com).mp3', duration: '5:12' },
        { id: 202, title: 'Bahut Pyar Karte Hai', artist: 'Kumar Sanu', audio: 'src/playlist/90s songs/Bahut Pyar Karte Hai (Male Version)(KoshalWorld.Com).mp3', duration: '5:45' },
        { id: 203, title: 'Chori Chori Dil Tera Churayenge', artist: 'Kumar Sanu', audio: 'src/playlist/90s songs/Chori Chori Dil Tera Churayenge(KoshalWorld.Com).mp3', duration: '5:20' },
        { id: 204, title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar', audio: 'src/playlist/90s songs/Pal Pal Dil Ke Paas(KoshalWorld.Com).mp3', duration: '4:55' },
        { id: 205, title: 'Tujhko Na Dekhun', artist: 'Kumar Sanu', audio: 'src/playlist/90s songs/Tujhko Na Dekhun(KoshalWorld.Com).mp3', duration: '5:30' }
      ]
    },
    {
      id: 3,
      name: 'Coke Studio',
      image: cokeStudioImg,
      songs: [
        { id: 301, title: 'Arz Kiya Hai', artist: 'Coke Studio Bharat', audio: 'src/playlist/coke studio/Arz Kiya Hai _ Coke Studio Bharat - (Raag.Fm) (1).mp3', duration: '4:15' }
      ]
    },
    {
      id: 4,
      name: 'Old Hindi',
      image: oldHindiImg,
      songs: []
    },
    {
      id: 5,
      name: 'South Indian',
      image: southIndianImg,
      songs: [
        { id: 501, title: 'Beer Song', artist: 'Anirudh', audio: 'src/playlist/south songs/Beer-Song-MassTamilan.dev.mp3', duration: '3:45' },
        { id: 502, title: 'Coffee Shop', artist: 'Anirudh', audio: 'src/playlist/south songs/Coffee-Shop-MassTamilan.dev.mp3', duration: '3:30' },
        { id: 503, title: 'I am Always Free', artist: 'Anirudh', audio: 'src/playlist/south songs/I-am-Always-Free-MassTamilan.fm.mp3', duration: '3:20' },
        { id: 504, title: 'Madurai Feel Good', artist: 'Ajay Musical', audio: 'src/playlist/south songs/Madurai - Feel Good Bgm  An Ajay Musical.mp3', duration: '2:45' },
        { id: 505, title: 'Minnalvala', artist: 'South Artist', audio: 'src/playlist/south songs/Minnalvala(KoshalWorld.Com).mp3', duration: '4:10' },
        { id: 506, title: 'Peelings', artist: 'South Artist', audio: 'src/playlist/south songs/Peelings.mp3', duration: '3:55' },
        { id: 507, title: 'Singari', artist: 'Telugu Artist', audio: 'src/playlist/south songs/Singari (Telugu)(KoshalWorld.Com).mp3', duration: '4:25' },
        { id: 508, title: 'Smiling With The Pain', artist: 'Theme Music', audio: 'src/playlist/south songs/Smiling With The Pain Theme.mp3', duration: '3:15' },
        { id: 509, title: 'Sunrise Theme', artist: 'Theme Music', audio: 'src/playlist/south songs/Sunrise Theme.mp3', duration: '3:40' },
        { id: 510, title: 'The Cycle', artist: 'South Artist', audio: 'src/playlist/south songs/The Cycle.mp3', duration: '3:50' },
        { id: 511, title: 'The Love Bug Has Bitten', artist: 'South Artist', audio: 'src/playlist/south songs/The-Love-Bug-Has-Bitten.mp3', duration: '4:05' },
        { id: 512, title: 'Thiruchitrambalam Title', artist: 'Anirudh', audio: 'src/playlist/south songs/Thiruchitrambalam-Title-Theme-MassTamilan.dev.mp3', duration: '2:55' },
        { id: 513, title: 'Vizhi Veekura', artist: 'South Artist', audio: 'src/playlist/south songs/Vizhi Veekura.mp3', duration: '4:15' },
        { id: 514, title: 'Welcome To Hyderabad', artist: 'Premalu BGM', audio: 'src/playlist/south songs/Welcome To Hyderabad – Premalu _ BGM Ringtone - MobCup.Com.Co.mp3', duration: '3:25' }
      ]
    },
    {
      id: 6,
      name: 'Urdu Collection',
      image: urduCollectionImg,
      songs: [
        { id: 601, title: 'Iraaday', artist: 'Urdu Artist', audio: 'src/playlist/urdu songs/Iraaday(PaglaSongs).mp3', duration: '4:20' },
        { id: 602, title: 'Pal Pal', artist: 'Urdu Artist', audio: 'src/playlist/urdu songs/Pal Pal(KoshalWorld.Com).mp3', duration: '4:45' },
        { id: 603, title: 'Pasoori', artist: 'Shae Gill', audio: 'src/playlist/urdu songs/Pasoori - Shae Gill.mp3', duration: '3:55' },
        { id: 604, title: 'Sadqay', artist: 'Urdu Artist', audio: 'src/playlist/urdu songs/Sadqay-(PagalSongs.Com.IN).mp3', duration: '4:10' }
      ]
    }
  ])

  const handlePlaylistClick = (playlistId) => {
    setExpandedPlaylist(expandedPlaylist === playlistId ? null : playlistId)
  }

  const handlePlayPlaylist = (playlist) => {
    if (playlist.songs.length > 0) {
      setPlaylistAndPlay(playlist.songs, 0)
    }
  }

  // const handleSongClick = (playlist, songIndex) => {
  //   setPlaylistAndPlay(playlist.songs, songIndex)
  // }
  const handleTrendingSongClick = (song, index) => {
  setPlaylistAndPlay(trendingSongs, index);
};

const handlePlaylistSongClick = (song, index) => {
  setPlaylistAndPlay(playlistSongs, index);
};


  const [trendingArtists] = useState([
    { id: 1, name: 'Darshan Raval', image: darshanImg },
    { id: 2, name: 'Arijit Singh', image: arijitImg },
    { id: 3, name: 'Jubin Nautiyal', image: jubinImg },
    { id: 4, name: 'Gajendra Verma', image: gajendraImg },
    { id: 5, name: 'Anuv Jain', image: anuvImg }
  ])

  const [trendingSongs] = useState([
    {
      id: 1,
      title: 'Arz Kiya Hai',
      artist: 'Coke Studio',
      image: arzKiyaHaiImg,
      audio: 'Arz Kiya Hai _ Coke Studio Bharat - (Raag.Fm) (1).mp3'
    },
    {
      id: 2,
      title: 'Jhol',
      artist: 'Diljit Dosanjh',
      image: darshanImg,
      audio: 'Jhol(KoshalWorld.Com).mp3'
    },
    {
      id: 3,
      title: 'Mahiye Jinna Sohna',
      artist: 'Diljit Dosanjh',
      image: mahiyeJinnaImg,
      audio: 'Mahiye Jinna Sohna_320(PagalWorld.com.sb).mp3'
    },
    {
      id: 4,
      title: 'Barbaad',
      artist: 'Jubin Nautiyal',
      image: jubinImg,
      audio: 'Barbaad Saiyaara 320 Kbps.mp3'
    },
    {
      id: 5,
      title: 'Aabaad Barbaad',
      artist: 'Arijit Singh',
      image: aabaadBarbadImg,
      audio: 'Aabaad Barbaad - Arijit Singh.mp3'
    },
    {
      id: 6,
      title: 'Saiyaara',
      artist: 'Mohit Chauhan',
      image: arijitImg,
      audio: 'Title Track Saiyaara 320 Kbps.mp3'
    },
    {
      id: 7,
      title: 'Baarishon Mein',
      artist: 'Darshan Raval',
      image: darshanImg,
      audio: 'Baarishon Mein Darshan Raval 320 Kbps.mp3'
    },
    {
      id: 8,
      title: 'Hawa Banke',
      artist: 'Darshan Raval',
      image: darshanImg,
      audio: 'Hawa Banke - Darshan Raval-(PagalWorld.Ink).mp3'
    },
    {
      id: 9,
      title: 'Tera Ho Gaya',
      artist: 'Atif Aslam',
      image: arijitImg,
      audio: 'Tera Ho Gaya_320(PagalWorld.com.sb).mp3'
    },
    {
      id: 10,
      title: 'Asal Mein',
      artist: 'Darshan Raval',
      image: darshanImg,
      audio: 'Asal Mein Asal Mein Single 320 Kbps.mp3'
    }
  ])

  const handleSongClick = (song, index) => {
    setPlaylistAndPlay(trendingSongs, index)
  }

  return (
    <>
      {/* Playlists Section */}
      <section className="playlists-section" id="playlists">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-list-ul"></i> <span className="gradient-text">Your Playlists</span>
            </h2>
            <p className="section-subtitle">Curated collections for every mood</p>
          </div>

          <div className="playlist-grid">
            {playlists.map((playlist, index) => (
              <div key={playlist.id} className="playlist-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className={`playlist-card ${expandedPlaylist === playlist.id ? 'expanded' : ''}`}
                  onClick={() => handlePlaylistClick(playlist.id)}
                >
                  <div className="playlist-image" style={{ backgroundImage: `url(${playlist.image})` }}>
                    <div
                      className="play-overlay"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePlayPlaylist(playlist)
                      }}
                    >
                      <i className="fas fa-play"></i>
                    </div>
                    <div className="playlist-badge">
                      <i className="fas fa-music"></i> {playlist.songs.length}
                    </div>
                  </div>
                  <div className="playlist-info">
                    <h3>{playlist.name}</h3>
                    <p>{playlist.songs.length} songs</p>
                  </div>
                  <div className="expand-icon">
                    {expandedPlaylist === playlist.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                {expandedPlaylist === playlist.id && (
                  <div className="songs-container">
                    {playlist.songs.length > 0 ? (
                      playlist.songs.map((song, songIndex) => (
                        <div
                          key={song.id}
                          className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
                          onClick={() => handleSongClick(playlist, songIndex)}
                        >
                          <div className="song-number">
                            {currentSong?.id === song.id && isPlaying ? (
                              <FaPause className="playing-icon" />
                            ) : (
                              <span>{songIndex + 1}</span>
                            )}
                          </div>
                          <div className="song-details">
                            <h4>{song.title}</h4>
                            <p>{song.artist}</p>
                          </div>
                          <div className="song-duration">
                            {song.duration}
                          </div>
                          <div className="song-actions">
                            <button
                              className="action-btn"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleSongClick(playlist, songIndex)
                              }}
                            >
                              {currentSong?.id === song.id && isPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="no-songs">
                        <p>No songs available in this playlist</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Artists */}
      <section className="artists-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-star"></i> <span className="gradient-text">Popular Artists</span>
            </h2>
            <p className="section-subtitle">Listen to your favorite artists</p>
          </div>

          <div className="artist-sec">
            {trendingArtists.map((artist, index) => (
              <div key={artist.id} className="artist-contain" style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className={`artist-card${index + 1}`}
                  style={{ backgroundImage: `url(${artist.image})` }}
                >
                  <div className="artist-overlay">
                    <i className="fas fa-play-circle"></i>
                  </div>
                </div>
                <h3>{artist.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Songs */}
      <section className="songs-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-fire"></i> <span className="gradient-text">Trending Songs</span>
            </h2>
            <p className="section-subtitle">Most played tracks this week</p>
          </div>

          <div className="songs-sec">
            {trendingSongs.map((song, index) => {
              const isCurrentSong = currentSong && currentSong.id === song.id
              return (
                <div
                  key={song.id}
                  className="songs-contain"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div
                    className={`songs-card${index + 1} ${isCurrentSong ? 'active' : ''}`}
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
                    <div className="song-number">#{index + 1}</div>
                  </div>
                  <div className="song-card-info">
                    <h3 className={isCurrentSong ? 'active' : ''}>
                      {song.title}
                    </h3>
                    <p className="artist-name">{song.artist}</p>
                  </div>
                  <button
                    className="add-to-playlist-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      console.log('Add to playlist:', song)
                    }}
                    title="Add to playlist"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default PlaylistSection

