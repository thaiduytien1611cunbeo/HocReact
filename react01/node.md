# Render component

    -> Hàm có chữ đầu viết hoa là component
    -> Tạo functional component : rafce
    -> Tạo class Component: rce
    -> Tìm hiểu 1 xíu về markdown

    -> Fragment : React.Fragment
    -> Sort : <></>

    -> Props:
        - Truyền dữ liệu từ component cha -> sang component con
        - không sửa được đâu nhé ( Lỗi đó )

    -> giả sử ta có :
        - const a = () => {

        }
        - const b = a
        - const c = b;
        => khi gọi c thì hàm a sẽ chạy 1 hàm có nhiều tên

    -> render Prop

    -> Children Prop

    -> State : Trạng thái thể hiển dữ liệu của 1 component
        - Khi state thay đổi -> thì component rẽ rerender (Làm mới UI)
        - Trong Class Component -> state có sẵn và thể hiện là một thuộc tính ( Object )
        - Không được thay đổi trực tiếp state, mà phải thông qua hàm set (có sẵn)
        - Không được setState trong constructor và trong render

    -> VÒNG ĐỜI COMPONENT
        - Mounting
            + 1. Constructor (gọi khi khởi tạo các giá trị mặc định)
            + 2. render
            + 3. componentDidMount (gọi ngay sau khi render lần đầu tiên)

        - Update
            + 1. render
            + 2. componentDidUpdate (gọi sau khi render lần 2)

        - UnMounting
            + 1. componentWillUnMount (gọi ngay sau khi component bị loại khỏi DOM)
