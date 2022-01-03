import { Drawer, Space, Button } from "antd";

const SiderBar: React.FC = ({ onClose = () => {}, visible: boolean }) => {
  return (
    <>
      <Drawer
        title="Drawer with extra actions"
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default SiderBar;
