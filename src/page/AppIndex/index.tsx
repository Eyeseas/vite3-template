import {Button} from "antd";

export default function AppIndex(){
    return (
        <div className="app-indexed container mx-auto">
            <h1>这是一个默认的功能测试以及展示页面</h1>
            <Button type={`primary`}>Antd 的button</Button>
            <div className={`w-32 h-32 p-4 bg-amber-200 rounded-2xl text-center`}>
                tailwindcss的原子样式
            </div>
        </div>
    )
}
