
import Page404 from "../src/components/page404";
import MainGrid from "../src/components/mainGrid";
import Box from "../src/components/box";
import { AlurakutMenu } from './lib/AluraKutCommons'

export default function PageNotFound() {

  return (
    <>
      <AlurakutMenu></AlurakutMenu>
      <MainGrid>
        <Page404 style={{ gridArea:'mainArea'}}> 
          <div>
            <h1>Sorry :/ </h1>
            <h1>Página kut não foi encontrada </h1>
          </div>  
        </Page404>     
      </MainGrid>
    </>
  )
}
