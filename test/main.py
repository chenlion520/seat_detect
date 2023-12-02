import cv2
import json
import time
def detec(picpath,datapath,faces1,timeresult,seat_square):
    img = cv2.imread(picpath)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)   # 將圖片轉成灰階
    face_cascade = cv2.CascadeClassifier("C:/Users/user/Desktop/SE/test/detect_module/haarcascade_frontalface_default.xml")   # 載入人臉模型
    faces = face_cascade.detectMultiScale(gray)    # 偵測人臉
    tmp = []
    for (x, y, w, h) in seat_square:
        cv2.rectangle(img, (x, y), (x+w,y+h ), (255, 255, 0), 2)    # 利用 for 迴圈，抓取每個人臉屬性，繪製方框 座位
    for (x, y, w, h) in faces1:
        cv2.rectangle(img, (x, y), (x+w,y+h ), (0, 255, 0), 2)    #人
    k = 0
    for (x, y, w, h) in faces1:#檢查人在哪個座位裡面
        tmp.append([])
        i = 0
        for (xa, ya, wa, ha) in seat_square:
            if(x > xa and x < (xa+wa) and y > ya and y < (ya+ha)):
                tmp[k].append(i)
            if((x+w) > xa and (x+w) < (xa+wa) and y > ya and y < (ya+ha)):
                tmp[k].append(i)
            if(x > xa and x < (xa+wa) and (y+w) > ya and (y+w) < (ya+ha)):
                tmp[k].append(i)
            if((x+w) > xa and (x+w) < (xa+wa) and (y+w) > ya and (y+w) < (ya+ha)):
                tmp[k].append(i)
            tmp[k] = list(set(tmp[k]))
            i += 1
        k += 1
    seats = ""
    for i in tmp:
        for seat in i:
            seats += str(seat)
            seats += " "
    seats = seats.split(" ")
    timeresult = timeresult.split(" ")
    data = [{"seats":seats,"time":timeresult}]
    print(data)
    with open(datapath, "w") as f:
        json.dump(data, f, indent = 4)
    ims = cv2.resize(img,(1000,750))
    cv2.imshow('NTOU', ims)
    cv2.waitKey(0) # 按下任意鍵停止
    cv2.destroyAllWindows()
#################################################################################################

i = 1
while(1):
    localtime = time.localtime()
    timeresult = time.strftime("%I:%M",localtime)
    print(timeresult)
    seat_square = [[120,80,250,250],[450,80,250,250],[750,80,250,250],[120,1000,250,250],[450,1000,250,250],[750,1000,250,250]]#座位
    faces1 = [[[130,85,100,100],[150,1100,150,150],[850,900,200,200]],
              [],
              [[100,1000,150,150]],
              [[150,60,120,120],[130,1100,100,100],[650,1100,150,150]],
              [[150,40,120,120],[130,1050,120,120],[1050,1150,120,120]]]
    
    faces2 = [[[150,1100,200,200]],
              [[130,1100,100,100],[450,1100,150,150],[850,1100,200,200]],
              [[150,900,150,150],[450,1100,200,200]],
              [[650,195,120,120],[600,1150,115,115],[1050,1250,120,120]],
              [[650,50,120,120]]]
    
    faces3 = [[[450,100,100,100],[150,1100,200,200]],
              [[450,50,100,100],[150,1100,200,200]],
              [[450,120,150,150]],
              [[650,100,120,120],[150,1000,90,90]],
              [[80,120,150,150],[650,130,120,120],[100,1150,110,110],[600,1200,120,120]]]
    cslab_Apic_path = 'C:/Users/user/Desktop/SE/test/restaurant/cslab/picture/A_table'+str(i)+'.jpg'
    cslab_Bpic_path = 'C:/Users/user/Desktop/SE/test/restaurant/cslab/picture/B_table'+str(i)+'.jpg'
    cslab_Cpic_path = 'C:/Users/user/Desktop/SE/test/restaurant/cslab/picture/C_table'+str(i)+'.jpg'
    dataA_path = 'study-roomA.json'              #改路徑
    dataB_path = 'study-roomB.json'
    dataC_path = 'study-roomC.json'
    detec(cslab_Apic_path,dataA_path,faces1[i-1],timeresult,seat_square)
    detec(cslab_Bpic_path,dataB_path,faces2[i-1],timeresult,seat_square)
    detec(cslab_Cpic_path,dataC_path,faces3[i-1],timeresult,seat_square)

    seat_square = [[120,80,250,250],[450,80,250,250],[750,80,250,250],[120,1000,250,250],[450,1000,250,250],[750,1000,250,250]]#座位
    faces4 = [[],
              [[150,60,120,120],[130,1100,100,100],[650,1100,150,150]],
              [[650,100,120,120],[150,1000,90,90]],
              [[450,100,100,100],[150,1100,200,200]],
              [[150,40,120,120],[130,1050,120,120],[1050,1150,120,120]]]
    faces5 = [[[150,1100,200,200]],
              [[150,1100,200,200]],
              [[450,120,150,150]],
              [[650,195,120,120],[600,1150,115,115],[1050,1250,120,120]],
              [[80,120,150,150],[650,130,120,120],[100,1150,110,110],[600,1200,120,120]]]
    mac_Apic_path = 'C:/Users/user/Desktop/SE/test/restaurant/mac/picture/A_table'+str(i)+'.jpg'
    mac_Bpic_path = 'C:/Users/user/Desktop/SE/test/restaurant/mac/picture/B_table'+str(i)+'.jpg'
    dataA_path = 'macA.json'              #改路徑
    dataB_path = 'macB.json'
    detec(mac_Apic_path,dataA_path,faces4[i-1],timeresult,seat_square)
    detec(mac_Bpic_path,dataB_path,faces5[i-1],timeresult,seat_square)
    i+=1
    time.sleep(10)
    if(i > 5):
            i = 1