import MainGrid from "../src/components/mainGrid";
import Box from "../src/components/box";
import { AlurakutMenu } from './lib/AluraKutCommons'

/**
 * Sidebar Profile User 
 */
function ProfileSideBar( user ){
    
  return (
    <div style={{ gridArea:'profileArea'}}>
      <Box>
        <img src={`https://github.com/${user.name}.png`}/>
      </Box>
    </div>
  );

}

export default function Home() {

  const userName = "eilem";

  return (
    <>
      <AlurakutMenu></AlurakutMenu>
      <MainGrid>
        <ProfileSideBar name={userName}></ProfileSideBar>

        <div style={{ gridArea:'mainArea'}}>
          <Box>
            Feed
          </Box>
        </div>

        <div style={{ gridArea:'relationsArea'}}>
          <Box>
            Sidebar
          </Box>
          <Box>
            Sidebar
          </Box>
        </div>

      </MainGrid> 
    </>
  )
}
