import SwarmDemo from "../components/SwarmDemo"
import { addHash, addSelectedContent } from "../actions/swarm"
import { drizzleConnect } from "drizzle-react"
import { publish, getContent } from "../integrations/swarm"

const mapStateToProps = (state: any) => {
  return {
    swarmHashes: state.swarm.hashes,
    selectedContent: state.swarm.selectedContent
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    publishToSwarm: async (data: any) => {
        const hash = await publish(data)
        dispatch(addHash(hash))
    },
    fetchFromSwarm: async (hash: string) => {
        const content = await getContent(hash)
        dispatch(addSelectedContent(content))
    }
  }
}

export default drizzleConnect(SwarmDemo, mapStateToProps, mapDispatchToProps)
