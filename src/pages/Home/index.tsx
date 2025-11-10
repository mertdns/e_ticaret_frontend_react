import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";


export default function Home() {
    const data: string = useSelector((state: RootState) => state.app.Theme);



    return (
        <div className="text-red-900">
            {data}
        </div>
    )
}