import { question } from "readline-sync";
import { Point2D } from "./point2d";

// Khai báo lớp Circle
export class Circle {
  // Khai báo thuộc tính nội bộ lớp Circle
  private _center: Point2D;
  private _radius: number;

  /**
   * Phương thức khởi tạo đối tượng hình tròn
   * @param center tâm 
   * @param radius bán kính 
   */
  constructor(center: Point2D, radius: number) {
    this._center = center;
    if (radius > 0)
      this._radius = radius;
    else 
      this._radius = 1;
  }

  /**
   * Phương thức lấy tâm 
   */
  public get center(): Point2D {
    return this._center;
  }

  /**
   * Phương thức cập nhập tâm 
   */
  public set center(center: Point2D) {
    const x = center.x;
    const y = center.y;
    this._center = new Point2D(x, y);
  }

  /**
   * Phương thức lấy bán kính
   */
  public get radius(): number {
    return this._radius;
  }

  /**
   * Phương thức cập nhập bán kính
   */
  public set radius(value: number) {
    if (value > 0)
      this._radius = value;
  }

  /**
   * Phương thức nhập tâm và bán kính hình tròn
   */
  public scan(): void {
    console.log("Nhap tam hinh tron: ");
    this._center.scan();
    this._radius = parseFloat(question("Nhap ban kinh: ") || "0");
  }

  /**
   * Phương thức in ra tâm và bán kính hình tròn
   */
  public print(): void {
    console.log(`Tam: `);
    this._center.print();
    console.log(`Ban kinh: ${this._radius}`);
  }

   /**
   * Phương thức di chuyển hình tròn đến vị trí mới
   * @param dx Độ dời theo chiều ngang
   * @param dy Độ dời theo chiều dọc
   */
  public move(dx: number, dy: number): void {
    this._center.move(dx, dy);
  }

  /**
   * Phương thức tính diện tích hình tròn   
   * @returns diện tích hình tròn
   */
  public getArea(): number {
    return Math.PI * this._radius ** 2;
  }
}

