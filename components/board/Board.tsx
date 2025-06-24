import './Board.css';

// this is "умственные пируэты" XD

export default function Board() {
    return (
        <div className="board-wrapper w-full h-screen flex items-center justify-center">
            <div className="board">
                <table id="board">
                    <tbody>
                        <tr>
                            <td className="cell horisontal corner">corner</td>
                            {Array.from({ length: 11 }).map((_, i) => (
                                <td key={i} className="cell horisontal">
                                    {i}
                                </td>
                            ))}
                            <td className="cell horisontal corner">corner</td>
                        </tr>

                        {Array.from({ length: 6 }).map((_, i) => (
                            <tr key={i}>
                                <td className="cell vertical">{i}</td>
                                <td colSpan={11} className="cell vertical">
                                    {i}
                                </td>
                                <td className="cell vertical">{i}</td>
                            </tr>
                        ))}

                        <tr>
                            <td className="cell horisontal corner">corner</td>
                            {Array.from({ length: 11 }).map((_, i) => (
                                <td key={i} className="cell horisontal">
                                    {i}
                                </td>
                            ))}
                            <td className="cell horisontal corner">corner</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
