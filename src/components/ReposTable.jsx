import Repos from "./../Repos"
import RepoCard from "./RepoCard";

const repos = Repos;
const [python, WebDev, DS] = repos;
const pythonProjects = Object.keys(python).map((key) => {
        return python[key]
    })
const wdProjects = Object.keys(WebDev).map((key) => {
        return WebDev[key]
    })
const dsProjects = Object.keys(DS).map((key) => {
        return DS[key]
    })

function ReposTable(props){

    const pythonCards = pythonProjects.map((project) => <RepoCard project={project} />)
    const wdCards = wdProjects.map((project) => <RepoCard project={project} />)
    const dsCards = dsProjects.map((project) => <RepoCard project={project} />)

    var Cards = {
        python: pythonCards,
        WD: wdCards,
        DS: dsCards
    }


    return(
        <div className="ReposTable">
            {
                Cards[props.state] 
            }
        </div>
        
    )
}
export default ReposTable;