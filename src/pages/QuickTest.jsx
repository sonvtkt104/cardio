import { Steps } from 'antd';
import { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import BMI from '../images/BMI.png';
import {CheckCircleOutlined} from '@ant-design/icons';
import chedoan from '../images/chedoan.jpeg';
import thoiquen from '../images/thoiquen.jpeg';
import huyetap from '../images/huyetap.png';

const { Step } = Steps;
const { Option } = Select;

export default function QuickTest() {
    const [step, setStep] = useState(0);

    const [form] = Form.useForm();


    const handleChangeStep = (current) => {
        console.log(current)
        setStep(current);
    }

    return (
        <div className="quick-test">
            <h2>Quick Test</h2>
            <p>Cùng kiểm tra sức khỏe với chung tôi nào! 🥰</p>
            <div className="quick-test-content">
                <Steps 
                    progressDot 
                    current={step} 
                    direction="vertical" 
                    responsive={true} 
                    onChange={handleChangeStep}
                >
                    <Step subTitle={step > 0 ? (<span style={{ color: 'var(--color-green)'}}><CheckCircleOutlined /> Finished</span>) : ""} title="Thông tin cơ bản" description={
                        (
                            <div className={step === 0 ? "quick-test-step1 active" : "quick-test-step1"} >
                                <Form
                                    style={{ width: '40%'}}
                                    form={form}
                                    layout="vertical"
                                    initialValues={{
                                        requiredMarkValue: true,
                                    }}
                                    requiredMark={true}
                                >
                                    <Form.Item 
                                        label="Giới tính" 
                                        required 
                                        tooltip="This is a required field">
                                        <Select placeholder="Please select a option">
                                            <Option value="nam">Nam</Option>
                                            <Option value="nu">Nữ</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item 
                                        label="Tuổi" 
                                        required 
                                        tooltip="This is a required field">
                                        <Input style={{textAlign: 'left'}} placeholder="Enter your weight ..." />
                                    </Form.Item>
                                    <Form.Item 
                                        label="Cân nặng (kg)" 
                                        required 
                                        tooltip="This is a required field">
                                        <Input style={{textAlign: 'left'}} placeholder="Enter your weight ..." />
                                    </Form.Item>
                                    <Form.Item
                                        label="Chiều cao (m)"
                                        required
                                        tooltip={{
                                        title: 'This is a required field',
                                        }}
                                    >
                                        <Input style={{textAlign: 'left'}} placeholder="Enter your height ..." />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={() => setStep(1)} type="primary" style={{ width: '30%'}}>Tiếp theo</Button>
                                    </Form.Item>

                                </Form>
                                <div className="quick-test-step1-image">
                                    <img style={{width: '75%'}} src={BMI} alt="" />
                                </div>
                            </div>
                        )
                    } />
                    <Step subTitle={step > 1 ? (<span style={{ color: 'var(--color-green)'}}><CheckCircleOutlined /> Finished</span>) : ""} title="Chế độ ăn" description={(
                        <div className={step === 1 ? "quick-test-step2 active" : "quick-test-step2"}>
                            <Form
                                style={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                form={form}
                                layout="vertical"
                                initialValues={{
                                    requiredMarkValue: true,
                                }}
                                requiredMark={true}
                            >
                                    <Form.Item 
                                        name="select1"
                                        label="Bạn ăn 1 ngày bao nhiêu bữa?" 
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your option!',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Please select a option">
                                            <Option value="0">5 hoặc 6 bữa ăn nhỏ</Option>
                                            <Option value="1">3 bữa</Option>
                                            <Option value="2">1 hoặc 2 bữa</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item 
                                    name="select2"
                                        label="Mỗi ngày bạn ăn bao nhiêu lượng rau củ?" 
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your option!',
                                            },
                                        ]}
                                >
                                        <Select placeholder="Please select a option">
                                            <Option value="0">từ 300 gram (khoảng 2 chén)</Option>
                                            <Option value="1">100-300 gram</Option>
                                            <Option value="2">rất ít  hoặc không ăn</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item 
                                    name="select3"
                                        label="Mỗi ngày bạn ăn bao nhiêu lượng hoa quả?" 
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your option!',
                                            },
                                        ]}
                                     >
                                        <Select placeholder="Please select a option">
                                            <Option value="0">Từ 100-200 gram</Option>
                                            <Option value="1">Dưới 100 gram</Option>
                                            <Option value="2">Rất ít hoặc không</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item 
                                    name="select4"
                                        label="Bạn ăn những thức ăn có chất béo với số lượng như thế nào?( bình thường 50-83g chất béo / ngày )" 
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your option!',
                                            },
                                        ]}
                                        >
                                        <Select placeholder="Please select a option">
                                            <Option value="0">Rất ít</Option>
                                            <Option value="1">Trung bình</Option>
                                            <Option value="2">Rất nhiều</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={() => setStep(2)} type="primary" style={{ width: '40%'}}>Tiếp theo</Button>
                                        <Button style={{ width: '30%', marginLeft: '20px'}} type="primary" onClick={() => setStep(0)}>Trước</Button>
                                    </Form.Item>

                            </Form>
                            <div className="quick-test-step1-image">
                                <img style={{width: '75%'}} src={chedoan} alt="" />
                            </div>
                        </div>
                    )} />
                    <Step subTitle={step > 2 ? (<span style={{ color: 'var(--color-green)'}}><CheckCircleOutlined /> Finished</span>) : ""} title="Thói quen" description={(
                        <div className={step === 2 ? "quick-test-step3 active" : "quick-test-step3"}>
                            <Form
                                style={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                form={form}
                                layout="vertical"
                                initialValues={{
                                    requiredMarkValue: true,
                                }}
                                requiredMark={true}
                            >
                                <Form.Item
                                    name="select1"
                                    label="Bạn có thường xuyên hút thuốc lá?"
                                    hasFeedback
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please select your option!',
                                    },
                                    ]}
                                >
                                    <Select placeholder="Please select a option">
                                        <Option value="0">Không bao giờ</Option>
                                        <Option value="1">Thỉnh thoảng có hút</Option>
                                        <Option value="2">Thường xuyên hút</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="select2"
                                    label="Bạn có thường xuyên uống rượu bia"
                                    hasFeedback
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please select your option!',
                                    },
                                    ]}
                                >
                                    <Select placeholder="Please select a option">
                                        <Option value="0">không bao giờ</Option>
                                        <Option value="1">Thỉnh thoảng có uống</Option>
                                        <Option value="2">Thường xuyên uống</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="select3"
                                    label="Bạn có thường xuyên tập thể dục không?"
                                    hasFeedback
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please select your option!',
                                    },
                                    ]}
                                >
                                    <Select placeholder="Please select a option">
                                        <Option value="0">Có, Trên 3 ngày/ tuần</Option>
                                        <Option value="1">Có, từ 1-2 ngày/ tuần</Option>
                                        <Option value="2">Không</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="select4"
                                    label="Loại hình thể dục nào bạn thích nhất và đang luyện tập"
                                    hasFeedback
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please select your option!',
                                    },
                                    ]}
                                >
                                    <Select placeholder="Please select a option">
                                        <Option value="0">bài tập nhẹ nhàng ( đi bộ, yoga,...)</Option>
                                        <Option value="1">bài tập cường độ mạnh ( thể lực,..)</Option>
                                        <Option value="2">không loại nào</Option>
                                    </Select>
                                </Form.Item>
                                
                                <Form.Item>
                                    <Button onClick={() => setStep(3)} type="primary" style={{ width: '40%'}}>Tiếp theo</Button>
                                    <Button style={{ width: '30%', marginLeft: '20px'}} type="primary" onClick={() => setStep(1)}>Trước</Button>
                                </Form.Item>

                            </Form>
                            <div className="quick-test-step1-image">
                                <img src={thoiquen} alt="" style={{ width: '75%'}}/>
                            </div>
                        </div>
                    )} />
                    <Step subTitle={step > 3 ? (<span style={{ color: 'var(--color-green)'}}><CheckCircleOutlined /> Finished</span>) : ""} title="Sức khỏe" description={(
                        <div className={step === 3 ? "quick-test-step4 active" : "quick-test-step4"}>
                            <Form
                                style={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                form={form}
                                layout="vertical"
                                initialValues={{
                                    requiredMarkValue: true,
                                }}
                                requiredMark={true}
                            >
                                <Form.Item
                                    name="select1"
                                    label="Bạn có thường xuyên bị stress(căng thẳng) không?"
                                    hasFeedback
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please select your option!',
                                    },
                                    ]}
                                >
                                    <Select placeholder="Please select a option">
                                        <Option value="0">Không</Option>
                                        <Option value="1">Thỉnh thoảng </Option>
                                        <Option value="2">Thường xuyên</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="select2"
                                    label="Bạn có thường xuyên đi khám sức khỏe tổng quát không?"
                                    hasFeedback
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please select your option!',
                                    },
                                    ]}
                                >
                                    <Select placeholder="Please select a option">
                                        <Option value="0">mỗi năm 1 lần</Option>
                                        <Option value="1">từ 2-3 năm</Option>
                                        <Option value="2">Chưa bao giờ</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item>
                                    <Button onClick={() => setStep(4)} type="primary" style={{ width: '30%'}}>Kiểm tra</Button>
                                    <Button style={{ width: '30%', marginLeft: '20px'}} type="primary" onClick={() => setStep(2)}>Trước</Button>
                                </Form.Item>

                            </Form>
                            <div className="quick-test-step1-image">
                                <img src={huyetap} alt="" style={{ width: '75%'}}/>
                            </div>
                        </div>
                    )} />
                </Steps>
            </div>
           
        </div>
    )
}