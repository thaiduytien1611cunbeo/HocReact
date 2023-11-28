# Redux

    - Quản lý state Global cho các ứng dụng JS
    - Redux quản lý theo tư duy REDUCER
    - Các thành phần của Redux
    	* Store --> Kho chứa các State
    	* reducer --> Hàm cập nhật State thông qua các Action
    	* Action --> Object để mô tả các hành động từ phía UI lên phía Reducer
    	* Dispatch --> Gửi Action lên reducer
    	* Subscribe --> Lắng nghe các thay đổi State trên Store redux

    => Để hiểu về subscribe, tìm hiểu về

# Redux WorkFlow

    UI --> Dispatch --> Action --> Reducer --> Store --> Subscribe --> UI

# Action Creator => là một hàm trả về action
