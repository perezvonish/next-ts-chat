import {Divider, List} from "antd";

export default function RoomPreview() {
    return (
        <div>
            <Divider orientation="left">Rooms</Divider>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
            />
        </div>
    )
}