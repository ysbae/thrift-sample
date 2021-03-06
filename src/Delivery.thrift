namespace php Mesh.Delivery
namespace js  Mesh.Delivery
namespace cocoa MD
namespace java com.mesh.delivery

/** Timestamp in epoch */
typedef i64 Timestamp

typedef string AccessToken

/**
 * 배송 상태
 */
enum DeliveryStatus {
    /** 주문 접수됨 */
	SUBMITTED = 1,
	/** 배송기사가 배정됨 */
	DELIVERING = 2,
	/** 물품을 전달함 */
	COMPLETED = 10,
	/** 배송 취소됨 */
	CANCELLED = 11
}

enum Gender {
    FEMALE = 1,
    MALE = 2
}

/**
 * 배송기사
 */
struct Courier {
    /** 아이디 */
	1: required i32 id,
	/** 이름 */
	2: required string name,
	/** 전화번호 */
	3: required string phone,

	4: optional Gender gender
}

/**
 * 위치 정보
 */
struct LatLng {
	/** 위도 */
	1: required double lat,
	/** 경도 */
	2: required double lng
}

/**
 * 배송 주문
 */
struct Delivery {
    /** 주문 번호 */
    1: required string id,
    /** 출발지 */
    2: required LatLng origin,
    /** 도착지 */
    3: required LatLng destination,
    /** 주문 상태 */
    4: required DeliveryStatus status,
    /** 주문 수행 배송기사 */
    5: optional Courier courier,
    /** 접수 시각 */
    6: required Timestamp createdAt
}

/**
 * 오류 코드
 */
enum ErrorCode {
    /** No information available about the error */
    UNKNOWN = 1,

    /** The format of the request data was incorrect */
    BAD_DATA_FORMAT = 2,

    /** A required parameter/field was absent */
    DATA_REQUIRED = 3,

    /** Access token is invalid */
    INVALID_AUTH = 4
}
exception ServiceException {
	/** The numeric code indicating the type of error that occurred. */
	1: optional ErrorCode code,

    /** If the error applied to a particular input parameter, this will indicate which parameter. */
	2: optional string parameter,

	3: optional string message
}

service DeliveryService {
	Delivery submitDelivery(1: AccessToken accessToken, 2: Delivery delivery)
            throws (1: ServiceException e)

    Delivery getDelivery(1: AccessToken accessToken, 2: i32 deliveryId)
        throws (1: ServiceException e)

    list<Delivery> listDeliveries(1: AccessToken accessToken, 2: i32 offset, 3: i32 limit)
        throws (1: ServiceException e)

    Delivery assignCourier(1: AccessToken accessToken, 2: i32 deliveryId, 3: i32 courierId)
        throws (1: ServiceException e)

    Delivery cancelDelivery(1: AccessToken accessToken, 2: i32 deliveryId)
        throws (1: ServiceException e)

    Delivery completeDelivery(1: AccessToken accessToken, 2: i32 deliveryId)
        throws (1: ServiceException e)
}