import { question } from "readline-sync";

// Khai báo lớp Point2D
export class Point2D {
  // Khai báo thuộc tính nội bộ lớp Point2D
    private _x: number;
    private _y: number;

    /**
     * Khởi tạo đối tượng
     * @param x hoành độ    
     * @param y tung độ
     */
    constructor(x: number = 0, y: number = 0) {
        this._x = x;
        this._y = y;
    }

    /**
     * Phương thức nhập tung độ và hoành độ
     */
    public scan(): void {
        this._x = Number(question("Nhập hoành độ: "));
        this._y = Number(question("Nhập tung độ: "));
    }

    /**
     * Phương thức in tung độ và hoành độ
     */
    public print(): void {
        console.log(`(${this._x}, ${this._y})`);
    }

    /**
     * Phương thức lấy hoành độ
     */
    public get x(): number {
        return this._x;
    }

    /**
     * Phương thức cập nhập hoành độ
     */
    public set x(value: number) {
        this._x = value;
    }

     /**
     * Phương thức lấy tung độ
     */
    public get y(): number {
        return this._y;
    }

        /**
     * Phương thức cập nhập tung độ
     */

    public set y(value: number) {
        this._y = value;
    }

    /**
     * Phương thức di chuyển điểm đến vị trí mới
     * @param dx Độ dời theo chiều ngang
     * @param dy Độ dời theo chiều dọc
     */
    public move(dx: number, dy: number): void {
        this._x += dx;
        this._y += dy;
    }

    /**
     * Phương thức tính khoảng cách đến một điểm khác
     * @param point Điểm cần được tính khoảng cách đến
     * @returns Khoảng cách
     */
    public getDistance(point: Point2D): number {
        const dx = this._x - point._x;
        const dy = this._y - point._y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

