import { notification } from 'antd';
import { IconType } from 'antd/lib/notification';

const createNotification = (type: IconType, message: string, description: string) => {
    
  notification[type]({
    message,
    description,
  });
};

export default createNotification;
