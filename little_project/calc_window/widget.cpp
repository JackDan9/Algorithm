#include "widget.h"
#include "ui_widget.h"

Widget::Widget(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Widget)
{
    ui->setupUi(this);
}

Widget::~Widget()
{
    delete ui;
}

void Widget::on_pushButton_clicked()
{
    int a = ui->lineEdit->text().toInt();
    int b = ui->lineEdit_3->text().toInt();
    QString str = ui->lineEdit_2->text().toStdString().data();//将用户在edit中输入的内容转化为字符串;
    int c;
    if(str == "+")
    {
        c = a + b;
        ui->label->setText(QString::number(c));//将整数c转换成字符串然和让label显示这个字符串
    }
    else if(str == "-")
    {
        c = a - b;
        ui->label->setText(QString::number(c));//将整数c转换成字符串然和让label显示这个字符串
    }
    else if(str == "*")
    {
        c = a * b;
        ui->label->setText(QString::number(c));//将整数c转换成字符串然和让label显示这个字符串
    }
    else if(str == "/")
    {
        if(b == 0)
        {
            ui->label->setText("ERROR");
        }else
        {
            c = a / b;
            ui->label->setText(QString::number(c));//将整数c转换成字符串然和让label显示这个字符串
        }
    }
    else
    {
        ui->label->setText("ERROR");
    }
}

void Widget::on_pushButton_2_clicked()
{
    ui->lineEdit_2->setText("+");
}


void Widget::on_pushButton_3_clicked()
{
    ui->lineEdit_2->setText("-");
}


void Widget::on_pushButton_4_clicked()
{
    ui->lineEdit_2->setText("*");
}


void Widget::on_pushButton_5_clicked()
{
    ui->lineEdit_2->setText("/");
}
