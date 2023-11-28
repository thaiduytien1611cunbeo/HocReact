## REACT Hook --> làm việc với các thành phần của REACT

    + React: State, refs, LifeCycle
    + 1 hàm đặc biệt, bắt đầu bằng từ khoá use( Có thể do React định nghĩa hoặc lập trình hiên tự định nghĩa )

## HOOK

    + const result = useState(initialValue)
    	-> Trả về 1 array bao gồm 2 phần tử:
    		1. Giá trị của state
    		2. hàm setState

    + userEffect(callback, deps) --> Xứ lý các Side Effect (Công việc bên lề, chạy sau khi update UI)
    	1. Khi state thay đổi
    	2. Re-render
    	3. UI update
    	4. Cleanup useEffect : tránh rò rỉ bộ nhớ
    	5. Callback trong useEffect hoạt động (Nếu deps thoa mãn điều kiện)

    	-> deps chính là điều kiện để chạy callback
    	-> Des sẽ xảy ra các trường hợp sau
    		- null hoặc undefine --> Component re-render : callback sẽ chạy
    		- [] --> Component render lần đầu tiên: Callback sẽ chạy
    		- [var1, var2, ...] --> 1 trong các biến trong deps thay đổi -> callBack sẽ chạy

    	** Chú ý khi cleanUp trong useEffect
    		- eventListener
    		- Timer: setTimeOut, setInterval
    		- Blob, localStorage, SessionStorage
    		- setState khi call Api (đảm bảo component chưa bị unmount)

    + useLayoutEffect
    	1. State thay đổi
    	2. Re-render
    	3. Cleanup useLayoutEffect
    	4. Callback useLayoutEffect
    	5. UI Update --> đợi callback chạy xong thì UI update

    + useId : return về một id ngẫu nhiên dùng trong trường hợp ví dụ như label và input (video buổi 45)
    	-> muốn cấu hình lại thì thêm vào tham số thứ 2 của createRoot ở file main một object có key là identifierPrefix : "cái này tự thêm" -> thì nó sẽ thêm vào tiền tố của id mà nó tự tạo ra

    + useTransition : xử lý khi dữ liệu quá nhiều mà mất nhiều thời gian
    	-> hàm start kiểu như callBack delay kì quá trình cập nhật state lại

    + useContext : CONTEXT API
    	- A -> B -> C -> D => Truyền qua PROPS
    	_ Muốn truyền thẳng A -> D

    		=> giải pháp : Dùng context để gửi và nhận dữ liệu không cần thông qua props

    		=> Context có 3 thành phần chính
    			1. Đối tượng Context khởi tạo bằng React.createContext()
    			2. Provider: Component của đối tượng Context (log ra mà coi nó có 1 đối tượng là Provider)
    			3. Consumer : Log ra cũng có (được thay thế bởi 1 hook là useContext)

    			Chú Ý : khi mô dùng m sẽ khai báo 1 cấy Provider trong ni sẽ truyền 1 kì value và m bọc cì component Provider cho mấy cì COMPONENT con thì từ trong mấy cì COMPONENT con ni sẽ nhận được cì value nớ bằng cì cách là m dùng useContext

    + useReducer :
    	=> const [count, setCount] = useReducer(reducer, 0);

    	+ EventHandler -> Dispatch gửi tên hành động -> Reducer nghe được hành động đó rồi nó trả về 1 giá trị mới (thực hiện logic update STATE) -> Dựa vào hook useReducer để cập nhật STATE rồi trả về STATE mới cho Component

    ** Higher Order Component = HOC
    	- Component cấp cao hơn của component hiện tại
    	- Bọc component cấp cao hơn của component hiện tại
    	- Các dữ liệu sẽ đi qua component cấp cao trước khi tới component hiện tại ( thường sẽ truyền dữ liệu qua PROPS)
    	- Cách thiết kế tạo ra một component mới nhận vào component ban đầu và trả về chính component đó

    + useRef :
    	- Tạo ra một biến giống như state : nó rẽ là 1 object có 1 key là current là giá trị khởi tạo ban đầu
    	- không re-render mỗi khi thay đổi biến đó như state
    	- Tham chiếu đến được 1 element để trả về DOM Element
