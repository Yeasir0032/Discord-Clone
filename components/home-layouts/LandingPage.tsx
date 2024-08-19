"use client"

import React from 'react';
import {Box,Card,Flex,Text} from '@radix-ui/themes';

export default function LandingPage(){
  return (
    <>
    <div className='bg-[url("/background.svg")] min-w-[100vw] min-h-screen bg-cover scroll-smooth scroll-m-0 scroll-p-0 flex flex-col flex-wrap'>

    <nav className='w-[100vw] h-[55px] flex justify-around items-center p-4 my-5'>
        <div className="flex items-center justify-center">
        <div>
        <img className='invert-1' src="logo.svg" alt="logo"/>
        </div>
        </div>
        
        <div className="flex items-center justify-center">
        <ul className='flex text-[#f9f9fa] space-x-20 '>
            <li className='hover:underline'><a href="/">Download</a></li> 
            <li className='hover:underline'><a href="/">Nitro</a></li> 
            <li className='hover:underline'><a href="/">Discover</a></li> 
            <li className='hover:underline'><a href="/">Safety</a></li> 
            <li className='hover:underline'><a href="/">Support</a></li> 
            <li className='hover:underline'><a href="/">Blog</a></li> 
            <li className='hover:underline'><a href="/">Careers</a></li> 
        </ul>
        </div>

        <button className='bg-white text-sm p-2 rounded-[50px] w-20 font-bold text-[#23272a] m-10'>Login</button>
</nav>

{/* Intro div */}
<div className="w-full h-full flex items-center justify-center m-3 gap-3">
<div className='text-[#ffffff] flex flex-col items-center justify-center  gap-10 '>
<h1 className='font-bold text-7xl text-justify'>GROUP CHAT <br />THAT’S ALL <br /> FUN & GAMES </h1>
<h3 className='text-2xl font-bold text-justify'>Discord is great for playing games and <br/> chilling with friends, or even building a <br /> worldwide community. Customize your <br /> own space to talk, play, and hang out.</h3>
</div>

<div className="img">
    <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp" alt="pic1"/>
</div>
</div>
<div className='flex items-center justify-center gap-6 h-2 mt-28'>

    <button className='text-[#323538] w-1/5 bg-[#ffffff] inline-block rounded-[55px] p-4 font-semibold text-lg hover:shadow-xl hover:text-[#6a76f3]'><img className="inline-block w-[9%] hover:fill-" src="download.svg" alt="Downloadpic" /> Download for Windows</button>
    <button className='text-[#fafbfe] bg-[#161cbb] w-1/5 rounded-[55px] p-4 font-semibold text-lg hover:shadow-xl '>Open Discord in your browser</button>
</div>



{/* Card 1 */}
  {/* DiscordGIF */}
<div className="relative w-[200px] left-[1150px] top-[288px]">
  <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6620ec7544fa3849c3cb27fc_party_wumpus.gif" alt="discordgif" />
</div>
<div className='w-full h-[70vh] flex items-center justify-center mx-auto relative my-72 top-16 p-5' >
<Flex>
<Box width="90vw" className='mx-auto p-0'>
    <Card className='w-[80vw] h-[90vh] rounded-full'>

      <Flex gap="3" align="center">
      <Box width="50vw" height="50vh">
      <video className='rounded-[50px] p-5  m-2 relative bottom-7 max-h-screen'
      id="a02aafd0-5263-8c7a-e8e6-eddeb8d5f018-video" autoPlay loop  muted  playsInline data-wf-ignore="true" data-object-fit="cover"><source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/663b271d6f05c8c9e11f8d65_Discord%20Refresh%20Sound-MP4-transcode.webm" data-wf-ignore="true"/></video>
      </Box>

      <Flex className='items-center justify-center'>
        <Box className='flex justify-center items-center flex-col p-5 my-4 relative left-12 top-16'>
          <Text as="div" className='text-4xl font-bold text-justify text-[#fff]'>
          MAKE YOUR <br /> GROUP CHATS <br /> MORE FUN
          </Text>
          <Text as="div"className='text-justify text-xl text-[#fafbfe]'>
          Use custom emoji, stickers, <br /> soundboard effects and more to add <br />your personality to your voice, video,<br /> or text chat. Set your avatar and a  <br /> custom status, and write your own <br /> profile to show up in chat your way.
          </Text>
        </Box>
      </Flex>
      </Flex>
    </Card>
  </Box>
</Flex>    
</div>

{/* Card 2 */}
<div className='w-full h-[50vh] flex items-center justify-center mx-auto relative my-64 top-16 p-10' >
<Flex>
<Box width="90vw" className='mx-auto'>
    <Card className='w-[80vw] h-[90vh] rounded-full'>

      <Flex gap="4" align="center">
      <Flex className='items-center justify-center'>
        <Box className='flex justify-center items-center flex-col p-6 my-4 relative left-10 top-16'>
          <Text as="div" className='text-4xl font-bold text-justify text-[#fff]'>
          STREAM LIKE <br /> YOU’RE IN THE <br /> SAME ROOM
          </Text>
          <Text as="div"className='text-justify text-xl text-[#fafbfe]'>
          High quality and low latency <br /> streaming makes it feel like you're <br /> hanging out on the couch with <br /> friends while playing a game, <br /> watching shows, looking at photos, <br /> or idk doing homework or <br /> something.
          </Text>
        </Box>

        <Box width="50vw" height="50vh" className='relative left-10 bottom-4'>
      <video className='rounded-[50px] p-5  m-2 relative bottom-7'
      id="a02aafd0-5263-8c7a-e8e6-eddeb8d5f018-video" autoPlay loop  muted  playsInline data-wf-ignore="true" data-object-fit="cover"><source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F665434315cbc60da2d4c9684_Discord_Website_Refresh_Same%20Room_EN_V2-transcode.webm" data-wf-ignore="true"/></video>
      </Box>
      </Flex>
      </Flex>
    </Card>
  </Box>
</Flex>    
</div>

{/* Card 3 */}
<div className='w-full h-[80vh] flex items-center justify-center mx-auto relative my-60 top-16 p-5 ' >
<Flex>
<Box width="90vw" className='mx-auto'>
    <Card className='w-[80vw] h-[90vh] rounded-full'>

      <Flex gap="3" align="center">
      <Box width="50vw" height="50vh">
      <video className='rounded-[50px] p-4  mb-4 relative bottom-7'
      id="a02aafd0-5263-8c7a-e8e6-eddeb8d5f018-video" autoPlay loop  muted  playsInline data-wf-ignore="true" data-object-fit="cover"><source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c6b04eff56a99c1e2d7d_Discord_Website_Refresh_Hop-In-transcode.webm" data-wf-ignore="true"/></video>
      </Box>

      <Flex className='items-center justify-center'>
        <Box className='flex justify-center items-center flex-col p-5 my-4 relative left-12 top-16'>
          <Text as="div" className='text-4xl font-bold text-justify text-[#fff]'>
          HOP IN WHEN <br /> YOU'RE FREE, <br /> NO NEED TO <br /> CALL
          </Text>
          <Text as="div"className='text-justify text-xl text-[#fafbfe]'>
          Easily hop in and out of voice or text <br /> chats without having to call or invite <br /> anyone, so your party chat lasts <br /> before, during, and after your game <br /> session.
          </Text>
        </Box>
      </Flex>
      </Flex>
    </Card>
  </Box>
</Flex>    
</div>

{/* Moving Tag Line  */}
<div className="w-full h-[20vh] bg-[#5474ff] flex items-center space-x-4 overflow-hidden whitespace-nowrap text-[#fff] my-5 p-5">

  <ul className='font-bold text-6xl animate-move-left flex  items-center gap-10 m-14 p-2 space-x-4 whitespace-nowrap'>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>TALK</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>PLAY</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>CHAT</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>HANGOUT</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>TALK</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>PLAY</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>CHAT</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>HANGOUT</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>TALK</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>PLAY</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>CHAT</p>
    </li>
    <li className='flex mx-14 gap-10 items-center'>
      <img className='w-[40px] h-[40px] ' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665786b8a93285bff36e194e_discord-mark-white%202.webp" alt="Discord Logo 1" />
      <p>HANGOUT</p>
    </li>
  </ul>
 
  </div>
  
  
{/* Card 4 */}
<div className='w-full h-[80vh] flex items-center justify-center mx-auto relative my-52 top-16' >
<Flex>
<Box width="90vw" className='mx-auto'>
    <Card className='w-[80vw] h-[90vh] rounded-full'>

      <Flex gap="4" align="center">
      <Flex className='items-center justify-center'>
        <Box className='flex justify-center items-center flex-col p-6 my-4 relative left-10 top-16'>
          <Text as="div" className='text-4xl font-bold text-justify text-[#fff]'>
          SEE WHO'S <br />AROUND TO<br />CHILL
          </Text>
          <Text as="div"className='text-justify text-xl text-[#fafbfe]'>
          See who's around, playing games,<br />or just hanging out. For supported<br />games, you can see what modes<br />or characters your friends are<br />playing and directly join up.
          </Text>
        </Box>

        <Box width="50vw" height="50vh" className='relative left-10 bottom-4'>
      <video className='rounded-[50px] p-5 mt-6 m-2 relative bottom-7'
      id="a02aafd0-5263-8c7a-e8e6-eddeb8d5f018-video" autoPlay loop  muted  playsInline data-wf-ignore="true" data-object-fit="cover"><source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See%20Who_s%20Around-transcode.webm" data-wf-ignore="true"/></video>
      </Box>
      </Flex>
      </Flex>
    </Card>
  </Box>
</Flex>    
</div>

{/* Card 5 */}
<div className='w-full h-[50vh] flex items-center justify-center mx-auto relative my-72 top-16 p-3' >
<Flex>
<Box width="90vw" className='mx-auto'>
    <Card className='w-[80vw] h-[90vh] rounded-full bg-transparent'>

      <Flex gap="3" align="center">
      <Box width="50vw" height="50vh">
      <video className='rounded-[50px] p-5 mt-6 m-2 relative bottom-7'
      id="a02aafd0-5263-8c7a-e8e6-eddeb8d5f018-video" autoPlay loop  muted  playsInline data-wf-ignore="true" data-object-fit="cover"><source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66446078b3e738a7c1f85e35_Discord_Website_Refresh_Activities_03-transcode.webm" data-wf-ignore="true"/></video>
      </Box>

      <Flex className='items-center justify-center'>
        <Box className='flex justify-center items-center flex-col p-5 my-4 relative left-12 top-16'>
          <Text as="div" className='text-4xl font-bold text-justify text-[#fff]'>
          ALWAYS HAVE<br />SOMETHING TO<br />DO TOGETHER
          </Text>
          <Text as="div"className='text-justify text-xl text-[#fafbfe]'>
          Watch videos, play built-in games,<br />listen to music, or just scroll<br />together and spam memes.<br />Seamlessly text, call, video chat, and<br />play games, all in one group chat.
          </Text>
        </Box>
      </Flex>
      </Flex>
    </Card>
  </Box>
</Flex>    
</div>

{/* Card 6 */}
<div className='w-full h-[50vh] flex items-center justify-center mx-auto relative my-64 top-16 p-5 ' >
<Flex>
<Box width="90vw" className='mx-auto'>
    <Card className='w-[80vw] h-[90vh] rounded-full'>

      <Flex gap="4" align="center">
      <Flex className='items-center justify-center'>
        <Box className='flex justify-center items-center flex-col p-6 my-4 relative left-10 top-16'>
          <Text as="div" className='text-4xl font-bold text-justify text-[#fff]'>
          WHEREVER YOU<br />GAME, HANG<br />OUT HERE
          </Text>
          <Text as="div"className='text-justify text-xl text-[#fafbfe]'>
          On your PC, phone, or console, you<br />can still hang out on Discord. Easily<br />switch between devices and use<br />tools to manage multiple group chats<br />with friends.
          </Text>
        </Box>

        <Box width="50vw" height="50vh" className='relative left-10 bottom-4'>
      <video className='rounded-[50px] p-5 mt-6 m-2 relative bottom-7'
      id="a02aafd0-5263-8c7a-e8e6-eddeb8d5f018-video" autoPlay loop  muted  playsInline data-wf-ignore="true" data-object-fit="cover"><source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c8e7cb756886cd8d61af_Discord_Website_Refresh_Platforms-transcode.webm" data-wf-ignore="true"/></video>
      </Box>
      </Flex>
      </Flex>
    </Card>
  </Box>
</Flex>    
</div>


{/* End Div */}
<div className='w-full h-full flex flex-col items-center justify-center gap-10 my-20' >
  <h1 className='text-center text-5xl text-[#fff] font-bold'>YOU CAN'T SCROLL ANYMORE.<br />BETTER GO CHAT.</h1>
  <button className='text-[#fafbfe] bg-[#5865f2] w-1/5 rounded-[55px] p-4 font-semibold text-lg hover:shadow-xl'><img className="inline-block w-[9%]" src="whitedownload.svg" alt="Downloadpic" /> Download for Windows</button>
</div>

{/* End Image */}
<div className='w-full max-h-[55vh] flex items-center justify-center  relative my-50 mx-24  px-1' >
  <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut-p-2000.webp" alt="endImage" />
  <img className='h-[247px] w-[194px] relative top-[65px] right-[929px]' src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662fa569e650b7bdf2f5d8b4_WUMPUS_LEAN_MOUTH.webp" alt="" />
</div>

{/* Footer */}
<footer className="w-full min-h-screen bg-[#4649aa] border-t-4 border-[#6f72c1] flex  items-center justify-center ">
    <div className="flex flex-col items-center gap-5  mx-8 ">
      <ul className="flex gap-5 mx-3 px-4 relative bottom-36">
        {/* GitHub */}
        <li><a href="/" target="_blank" rel="noopener noreferrer"><svg width="24" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="white" fillRule="evenodd" clipRule="evenodd"></path></svg></a></li>

        {/* Twitter */}
        <li><a href="/" target="_blank" rel="noopener noreferrer">
        <svg width="24" height="25" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 72 72" viewBox="0 0 72 72" id="twitter-x"><switch><g><path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z" fill="white"></path></g></switch></svg>
</a></li>

        {/* Instagram */}
        <li><a href="/" target="_blank" rel="noopener noreferrer"><svg width="24" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z" fill="white"></path></svg></a></li>

        {/* Linkedin */}
        <li><a href="/" target="_blank" rel="noopener noreferrer"><svg width="24" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="white" fillRule="evenodd" clipRule="evenodd"></path></svg></a></li>
      </ul>
    </div>

    {/* Product List */}
    <div className='w-full  flex  justify-evenly mx-8 border-b-2'>
    <div className="flex flex-col items-center justify-center text-justify bottom-40 relative">
        <ul className='flex flex-col text-[#f9f9fa] space-x-20 mx-auto gap-2'> 
      <span className='text-[#f9f9fa] font-medium text-center m-3'>Product</span>
            <li className='hover:underline'><a href="/">Download</a></li> 
            <li className='hover:underline'><a href="/">Nitro</a></li> 
            <li className='hover:underline'><a href="/">Status</a></li> 
            <li className='hover:underline'><a href="/">App Directory</a></li> 
            <li className='hover:underline'><a href="/">New Mobile Experience</a></li> 
        </ul>
        </div>

        {/* Company List */}
        <div className=" flex flex-col items-center justify-center bottom-44 relative">
        <ul className='flex flex-col text-[#f9f9fa] space-x-20 mx-auto gap-2'>
      <span className='text-[#f9f9fa] font-medium text-center m-3'>Company</span>
            <li className='hover:underline'><a href="/">About</a></li> 
            <li className='hover:underline'><a href="/">Jobs</a></li> 
            <li className='hover:underline'><a href="/">Brand</a></li> 
            <li className='hover:underline'><a href="/">Newsroom</a></li> 
        </ul>
        </div>

        {/* Resources List */}
        <div className=" flex flex-col items-center justify-center bottom-12 relative">
        <ul className='flex flex-col text-[#f9f9fa] space-x-20 mx-auto gap-2'>
      <span className='text-[#f9f9fa] font-medium text-center m-3'>Resources</span>
            <li className='hover:underline'><a href="/">College</a></li> 
            <li className='hover:underline'><a href="/">Support</a></li> 
            <li className='hover:underline'><a href="/">Safety</a></li> 
            <li className='hover:underline'><a href="/">Blog</a></li> 
            <li className='hover:underline'><a href="/">Feedback</a></li> 
            <li className='hover:underline'><a href="/">StreamKit</a></li> 
            <li className='hover:underline'><a href="/">Creators</a></li> 
            <li className='hover:underline'><a href="/">Community</a></li> 
            <li className='hover:underline'><a href="/">Developers</a></li> 
            <li className='hover:underline'><a href="/">Gaming</a></li> 
            <li className='hover:underline'><a href="/">Quests</a></li> 
            <li className='hover:underline'><a href="/">Official 3rd Party Merch</a></li> 
        </ul>
        </div>

        {/* Policies List */}
        <div className=" flex flex-col items-center justify-center relative bottom-32">
        <ul className='flex flex-col text-[#f9f9fa] space-x-20 mx-auto gap-2'>
      <span className='text-[#f9f9fa] font-medium text-center m-3'>Policies</span>
            <li className='hover:underline'><a href="/">Terms</a></li> 
            <li className='hover:underline'><a href="/">Privacy</a></li> 
            <li className='hover:underline'><a href="/">Cookie Settings</a></li> 
            <li className='hover:underline'><a href="/">Guidelines</a></li> 
            <li className='hover:underline'><a href="/">Acknowledgements</a></li> 
            <li className='hover:underline'><a href="/">Licenses</a></li> 
            <li className='hover:underline'><a href="/">Company Information</a></li> 
        </ul>
        </div>

        </div>

<div className="relative top-64 mx-6 my-6 right-[64%] flex justify-between">
        <img className='invert-1 w-40' src="logo.svg" alt="logo" />
        <button className='text-[#fafbfe] bg-[#5865f2] text-sm p-3 rounded-[50px] w-48 font-bold m-2 relative left-[700px]'>Login</button>
        </div>
</footer>

</div>
</>
  )
}
