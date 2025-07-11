import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    console.log(songid);
    return(
        <div className="flex flex-col">
<DetailsHeader  />
        </div>
    )
}

export default SongDetails;
