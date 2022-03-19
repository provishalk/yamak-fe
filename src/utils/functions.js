import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
alertify.set("notifier", "position", "top-right");

export const successNotification = (msg) => {
  // alert("hello");
  alertify.success(msg);
};

export const errorNotification = (msg) => {
  // alert("hello");
  alertify.error(msg);
};
