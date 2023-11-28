## REACT Hook --> làm việc với các thành phần của REACT

    + React: State, refs, LifeCycle
    + 1 hàm đặc biệt, bắt đầu bằng từ khóa use( Có thể do React định nghĩa hoặc lập trình hiên tự định nghĩa )

## HOOK

    + const result = useState(initialValue)
    	-> Trả về 1 array bao gồm 2 phần tử:
    		1. Giá trị của state
    		2. hàm setState

    + userEffect(callback, deps) --> Xứ lý các Side Effect (Công việc bên lề, chạy sau khi update UI)
    	1. Khi state thay đổi
    	2. Re-render
    	3. UI update
    	4. Callback trong useEffect hoạt động (Nếu deps thoa mãn điều kiện)

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
