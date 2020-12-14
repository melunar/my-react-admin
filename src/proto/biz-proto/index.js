/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from 'protobufjs/light'

const $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root())).addJSON({
  proto: {
    options: {
      go_package: '.;proto'
    },
    nested: {
      TSAppraisalHomePageRequest: {
        fields: {}
      },
      TSAppraisalHomePageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          banner: {
            rule: 'repeated',
            type: 'CarouselItem',
            id: 3
          },
          appraisalCount: {
            type: 'int32',
            id: 4
          },
          fakeRate: {
            type: 'int32',
            id: 5
          },
          fakeRanks: {
            rule: 'repeated',
            type: 'BrandRate',
            id: 6
          },
          realRanks: {
            rule: 'repeated',
            type: 'BrandRate',
            id: 7
          }
        }
      },
      TSSelectedAppraisalRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSSelectedAppraisalResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          selectedAppraisalRecord: {
            rule: 'repeated',
            type: 'SelectedAppraisalRecord',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSAIServiceServiceHomePageRequest: {
        fields: {}
      },
      TSAIServiceServiceHomePageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          appraisalCount: {
            type: 'int32',
            id: 4
          },
          classifyCount: {
            type: 'int32',
            id: 5
          },
          banner: {
            rule: 'repeated',
            type: 'CarouselItem',
            id: 6
          }
        }
      },
      TSAIServiceAppraisalKindsRequest: {
        fields: {}
      },
      TSAIServiceAppraisalKindsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          kindInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 3
          }
        }
      },
      TSAIServiceAppraisalBrandsRequest: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSAIServiceAppraisalBrandsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          brandInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInitial',
            id: 3
          },
          hotBrands: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 4
          }
        }
      },
      TSAIServiceAppraisalSeriesRequest: {
        fields: {
          brandID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSAIServiceAppraisalSeriesResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          seriesInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInitial',
            id: 3
          },
          hotSeries: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 4
          }
        }
      },
      TSAIServiceAppraisalPointsRequest: {
        fields: {
          categoryEnum: {
            type: 'CategoryEnum',
            id: 1
          },
          categoryID: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSAIServiceAppraisalPointsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          pointInfos: {
            rule: 'repeated',
            type: 'AIServicePointInfo',
            id: 3
          },
          buttonText: {
            type: 'string',
            id: 4
          },
          ticketActivity: {
            type: 'bool',
            id: 5
          },
          activityURL: {
            type: 'string',
            id: 6
          },
          activityName: {
            type: 'string',
            id: 7
          },
          inWhiteList: {
            type: 'bool',
            id: 8
          },
          whiteListStartTime: {
            type: 'string',
            id: 9
          },
          whiteListEndTime: {
            type: 'string',
            id: 10
          }
        }
      },
      TSAIServiceSinglePointAppraisalRequest: {
        fields: {
          pointID: {
            type: 'int32',
            id: 1
          },
          imgUrl: {
            type: 'string',
            id: 2
          },
          source: {
            type: 'string',
            id: 3
          }
        }
      },
      TSAIServiceSinglePointAppraisalResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          said: {
            type: 'string',
            id: 3
          },
          originalBox: {
            type: 'AIServiceAppraisalBox',
            id: 4
          },
          detectionBox: {
            type: 'AIServiceAppraisalBox',
            id: 5
          }
        }
      },
      TSAIServiceGenAppraisalResultRequest: {
        fields: {
          saidList: {
            rule: 'repeated',
            type: 'string',
            id: 1
          },
          exteriorUrl: {
            type: 'string',
            id: 2
          },
          source: {
            type: 'string',
            id: 3
          }
        }
      },
      TSAIServiceGenAppraisalResultResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderNo: {
            type: 'string',
            id: 3
          },
          needPay: {
            type: 'bool',
            id: 4
          },
          OAID: {
            type: 'string',
            id: 5
          }
        }
      },
      TSAIServiceWechatProductPayRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          openid: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAIServiceWechatProductPayResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          package: {
            type: 'string',
            id: 3
          },
          nonceStr: {
            type: 'string',
            id: 4
          },
          timestamp: {
            type: 'string',
            id: 5
          },
          paySign: {
            type: 'string',
            id: 6
          },
          signType: {
            type: 'string',
            id: 7
          }
        }
      },
      TSAIServiceGenAppraisalFeedbackListRequest: {
        fields: {}
      },
      TSAIServiceGenAppraisalFeedbackListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          feedbackList: {
            rule: 'repeated',
            type: 'string',
            id: 3
          }
        }
      },
      TSAIServiceGenAppraisalFeedbackRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          feedback: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAIServiceGenAppraisalFeedbackResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAIServiceTicketActivityBannerRequest: {
        fields: {}
      },
      TSAIServiceTicketActivityBannerResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          ticketActivity: {
            type: 'bool',
            id: 3
          },
          imageURL: {
            type: 'string',
            id: 4
          },
          activityURL: {
            type: 'string',
            id: 5
          },
          inWhiteList: {
            type: 'bool',
            id: 6
          },
          whiteListStartTime: {
            type: 'string',
            id: 7
          },
          whiteListEndTime: {
            type: 'string',
            id: 8
          },
          limited: {
            type: 'bool',
            id: 9
          },
          numLeft: {
            type: 'uint32',
            id: 10
          }
        }
      },
      TSAIServiceGenAppraisalOrderListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          state: {
            type: 'AIServiceAppraisalOrderStateEnum',
            id: 3
          },
          source: {
            type: 'string',
            id: 4
          }
        }
      },
      TSAIServiceGenAppraisalOrderListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          order: {
            rule: 'repeated',
            type: 'AIServiceOrder',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSAIServiceGenAppraisalReportRequest: {
        fields: {
          OAID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSAIServiceGenAppraisalReportResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          exteriorUrl: {
            type: 'string',
            id: 3
          },
          orderNo: {
            type: 'string',
            id: 4
          },
          OAID: {
            type: 'string',
            id: 5
          },
          genuine: {
            type: 'string',
            id: 6
          },
          hierarchy: {
            type: 'string',
            id: 7
          },
          kindID: {
            type: 'int32',
            id: 8
          },
          kindName: {
            type: 'string',
            id: 9
          },
          brandID: {
            type: 'int32',
            id: 10
          },
          brandName: {
            type: 'string',
            id: 11
          },
          seriesID: {
            type: 'int32',
            id: 12
          },
          seriesName: {
            type: 'string',
            id: 13
          },
          appraisalTime: {
            type: 'string',
            id: 14
          },
          description: {
            type: 'string',
            id: 15
          },
          grade: {
            type: 'string',
            id: 16
          },
          SARecordList: {
            rule: 'repeated',
            type: 'AIServiceAppraisalReportSAItem',
            id: 17
          },
          originalBox: {
            type: 'AIServiceAppraisalBox',
            id: 18
          },
          detectionBox: {
            type: 'AIServiceAppraisalBox',
            id: 19
          }
        }
      },
      TSAIServiceAppraisalReportWXACodeRequest: {
        fields: {
          scene: {
            type: 'string',
            id: 1
          },
          page: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAIServiceAppraisalReportWXACodeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          imgData: {
            type: 'bytes',
            id: 3
          }
        }
      },
      TSNumberFingerprintInfoRequest: {
        fields: {
          numberIDCard: {
            type: 'string',
            id: 1
          }
        }
      },
      TSNumberFingerprintInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          fingerprintInfo: {
            rule: 'repeated',
            type: 'FingerprintInfo',
            id: 3
          },
          numberIDCard: {
            type: 'string',
            id: 4
          },
          mainPic: {
            type: 'string',
            id: 5
          },
          createTime: {
            type: 'string',
            id: 6
          },
          phone: {
            type: 'string',
            id: 7
          }
        }
      },
      FingerprintInfo: {
        fields: {
          name: {
            type: 'string',
            id: 1
          },
          index: {
            type: 'string',
            id: 2
          },
          images: {
            rule: 'repeated',
            type: 'string',
            id: 3
          }
        }
      },
      TSNumberFingerprintInfoListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          numberIDCard: {
            type: 'string',
            id: 3
          },
          phone: {
            type: 'string',
            id: 4
          }
        }
      },
      TSNumberFingerprintInfoListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          fingerprintItem: {
            rule: 'repeated',
            type: 'FingerprintItem',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        }
      },
      TSNumberFingerprintCheckInfoListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          numberIDCard: {
            type: 'string',
            id: 3
          },
          phone: {
            type: 'string',
            id: 4
          },
          status: {
            type: 'string',
            id: 5
          }
        }
      },
      TSNumberFingerprintCheckInfoListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          checkItem: {
            rule: 'repeated',
            type: 'CheckItem',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        }
      },
      TSCreateNumberFingerprintInfoRequest: {
        fields: {
          mainPic: {
            type: 'string',
            id: 1
          },
          fingerprintInfo: {
            rule: 'repeated',
            type: 'FingerprintInfo',
            id: 3
          }
        }
      },
      TSCreateNumberFingerprintInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          numberIDCard: {
            type: 'string',
            id: 3
          }
        }
      },
      TSCheckFingerprintRequest: {
        fields: {
          imageUrl: {
            type: 'string',
            id: 1
          },
          numberIDCard: {
            type: 'string',
            id: 2
          },
          index: {
            type: 'string',
            id: 3
          }
        }
      },
      TSCheckFingerprintResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          hasMatch: {
            type: 'bool',
            id: 3
          }
        }
      },
      TSQueryAppraisalCouponCountRequest: {
        fields: {}
      },
      TSQueryAppraisalCouponCountResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          unusedCount: {
            type: 'int32',
            id: 3
          },
          usedCount: {
            type: 'int32',
            id: 4
          },
          expireCount: {
            type: 'int32',
            id: 5
          }
        }
      },
      TSQueryAppraisalCouponRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          }
        }
      },
      TSQueryAppraisalCouponResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          isEnd: {
            type: 'bool',
            id: 3
          },
          couponList: {
            rule: 'repeated',
            type: 'AppraisalCouponItem',
            id: 4
          },
          unusedCount: {
            type: 'int32',
            id: 5
          },
          usedCount: {
            type: 'int32',
            id: 6
          },
          expireCount: {
            type: 'int32',
            id: 7
          }
        }
      },
      TSExchangeAppraisalCouponRequest: {
        fields: {
          couponCode: {
            type: 'string',
            id: 1
          }
        }
      },
      TSExchangeAppraisalCouponResponse: {
        fields: {
          errorCode: {
            type: 'uint32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSNewOldRecognizeRequest: {
        fields: {
          images: {
            rule: 'repeated',
            type: 'string',
            id: 1
          },
          isAll: {
            type: 'bool',
            id: 2
          },
          bodyAffect: {
            type: 'bool',
            id: 3
          },
          cornerAffect: {
            type: 'bool',
            id: 4
          },
          beltAffect: {
            type: 'bool',
            id: 5
          },
          insideAffect: {
            type: 'bool',
            id: 6
          },
          hardwareAffect: {
            type: 'bool',
            id: 7
          },
          haveMaintain: {
            type: 'bool',
            id: 8
          }
        }
      },
      TSNewOldRecognizeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          newsGrades: {
            type: 'string',
            id: 3
          },
          newsResults: {
            type: 'string',
            id: 4
          },
          newsDetails: {
            rule: 'repeated',
            type: 'ImageResult',
            id: 5
          }
        },
        nested: {
          Result: {
            fields: {
              grade: {
                type: 'string',
                id: 1
              },
              newsDescription: {
                type: 'string',
                id: 2
              },
              newsResult: {
                type: 'string',
                id: 3
              },
              position: {
                type: 'string',
                id: 4
              }
            }
          },
          ImageResult: {
            fields: {
              image: {
                type: 'string',
                id: 1
              },
              result: {
                type: 'Result',
                id: 2
              }
            }
          }
        }
      },
      TSProductAiHolmesRequest: {
        fields: {
          imgB64: {
            type: 'string',
            id: 1
          },
          brandId: {
            type: 'int32',
            id: 2
          },
          skc: {
            type: 'string',
            id: 3
          },
          kindId: {
            type: 'int32',
            id: 23
          },
          imageURL: {
            type: 'string',
            id: 5
          }
        }
      },
      TSProductAiHolmesResponse: {
        fields: {
          errorCode: {
            type: 'uint32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          holmesResult: {
            rule: 'repeated',
            type: 'HolmesResult',
            id: 3
          },
          hasMatch: {
            type: 'bool',
            id: 4
          },
          logId: {
            type: 'int32',
            id: 5
          }
        }
      },
      TSAIServiceClassifyRequest: {
        fields: {
          imageURL: {
            type: 'string',
            id: 1
          },
          brandId: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSAIServiceClassifyResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          hasMatch: {
            type: 'bool',
            id: 3
          },
          logId: {
            type: 'int32',
            id: 4
          },
          productInfoList: {
            rule: 'repeated',
            type: 'ProductInfo',
            id: 5
          }
        },
        nested: {
          SkuInfo: {
            fields: {
              image: {
                type: 'string',
                id: 1
              },
              size: {
                type: 'string',
                id: 2
              },
              measurement: {
                type: 'string',
                id: 3
              },
              sku: {
                type: 'string',
                id: 4
              },
              newsDetails: {
                rule: 'repeated',
                type: 'NewPriceResult',
                id: 5
              },
              brandName: {
                type: 'string',
                id: 6
              },
              productName: {
                type: 'string',
                id: 7
              },
              color: {
                type: 'string',
                id: 8
              }
            }
          },
          ProductInfo: {
            fields: {
              brandName: {
                type: 'string',
                id: 1
              },
              productName: {
                type: 'string',
                id: 2
              },
              color: {
                type: 'string',
                id: 3
              },
              skuInfoList: {
                rule: 'repeated',
                type: 'SkuInfo',
                id: 4
              }
            }
          }
        }
      },
      TSProductSimilarRequest: {
        fields: {
          skc: {
            type: 'string',
            id: 1,
            options: {
              deprecated: true
            }
          },
          seriesId: {
            type: 'int32',
            id: 2,
            options: {
              deprecated: true
            }
          },
          brandId: {
            type: 'int32',
            id: 3
          },
          skcList: {
            rule: 'repeated',
            type: 'string',
            id: 4,
            options: {
              deprecated: true
            }
          },
          pageSize: {
            type: 'int32',
            id: 5
          },
          source: {
            type: 'string',
            id: 6
          }
        }
      },
      TSProductSimilarResponse: {
        fields: {
          errorCode: {
            type: 'uint32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          skcSimilarItem: {
            rule: 'repeated',
            type: 'SimilarItem',
            id: 3
          },
          count: {
            type: 'int32',
            id: 4
          }
        }
      },
      TSChooseBagStyleRequest: {
        fields: {
          imageURL: {
            type: 'string',
            id: 1
          },
          kindID: {
            type: 'uint32',
            id: 2
          },
          brandID: {
            type: 'uint32',
            id: 3
          },
          serviceType: {
            type: 'ServiceTypeEnum',
            id: 4
          }
        }
      },
      TSChooseBagStyleResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          BagStyleList: {
            rule: 'repeated',
            type: 'BagStyleItem',
            id: 3
          }
        },
        nested: {
          BagStyleItem: {
            fields: {
              skc: {
                type: 'string',
                id: 1
              },
              image: {
                type: 'string',
                id: 2
              },
              productName: {
                type: 'string',
                id: 3
              },
              color: {
                type: 'string',
                id: 4
              },
              size: {
                type: 'string',
                id: 5
              },
              measurement: {
                type: 'string',
                id: 6
              },
              brandName: {
                type: 'string',
                id: 7
              }
            }
          }
        }
      },
      ImageInfo: {
        fields: {
          HDImage: {
            type: 'string',
            id: 1
          },
          normalImage: {
            type: 'string',
            id: 2
          },
          thumbImage: {
            type: 'string',
            id: 3
          }
        }
      },
      StockProductDetailImgListInfo: {
        fields: {
          HDImage: {
            type: 'string',
            id: 1
          },
          normalImage: {
            type: 'string',
            id: 2
          },
          thumbImage: {
            type: 'string',
            id: 3
          }
        }
      },
      User: {
        fields: {
          nickname: {
            type: 'string',
            id: 1
          },
          phone: {
            type: 'string',
            id: 2
          },
          userType: {
            type: 'UserType',
            id: 3
          },
          sex: {
            type: 'string',
            id: 4
          },
          location: {
            type: 'string',
            id: 5
          },
          imageInfo: {
            type: 'ImageInfo',
            id: 6
          },
          weiboID: {
            type: 'string',
            id: 7
          },
          wechatID: {
            type: 'string',
            id: 8
          },
          appleID: {
            type: 'string',
            id: 9
          },
          inviteID: {
            type: 'string',
            id: 10
          },
          inviteKey: {
            type: 'string',
            id: 11
          }
        }
      },
      WallMaster: {
        fields: {
          nickname: {
            type: 'string',
            id: 1
          },
          imageInfo: {
            type: 'ImageInfo',
            id: 2
          }
        }
      },
      SingleWallStyle: {
        fields: {
          name: {
            type: 'string',
            id: 1
          },
          image: {
            type: 'ImageInfo',
            id: 2
          },
          styleID: {
            type: 'int32',
            id: 3
          },
          positionList: {
            rule: 'repeated',
            type: 'WallPosition',
            id: 4
          }
        }
      },
      Wall: {
        fields: {
          wid: {
            type: 'string',
            id: 1
          },
          likeCount: {
            type: 'int32',
            id: 2
          },
          wallStyle: {
            type: 'SingleWallStyle',
            id: 3
          },
          master: {
            type: 'WallMaster',
            id: 4
          }
        }
      },
      WallPosition: {
        fields: {
          x: {
            type: 'int32',
            id: 1
          },
          y: {
            type: 'int32',
            id: 2
          },
          w: {
            type: 'int32',
            id: 3
          },
          h: {
            type: 'int32',
            id: 4
          }
        }
      },
      UserAddress: {
        fields: {
          addressID: {
            type: 'int32',
            id: 1
          },
          recipient: {
            type: 'string',
            id: 2
          },
          phone: {
            type: 'string',
            id: 3
          },
          province: {
            type: 'string',
            id: 4
          },
          city: {
            type: 'string',
            id: 5
          },
          regions: {
            type: 'string',
            id: 6
          },
          detailAddress: {
            type: 'string',
            id: 7
          },
          isDefault: {
            type: 'bool',
            id: 8
          }
        }
      },
      CategoryInfo: {
        fields: {
          name: {
            type: 'string',
            id: 1
          },
          imageInfo: {
            type: 'ImageInfo',
            id: 2
          },
          key: {
            type: 'string',
            id: 3
          },
          categoryID: {
            type: 'int32',
            id: 4
          },
          status: {
            type: 'bool',
            id: 5
          },
          isLast: {
            type: 'bool',
            id: 6
          }
        }
      },
      KindInfo: {
        fields: {
          name: {
            type: 'string',
            id: 1
          },
          kindID: {
            type: 'int32',
            id: 2
          }
        }
      },
      BrandInitial: {
        fields: {
          name: {
            type: 'string',
            id: 1
          },
          brand: {
            rule: 'repeated',
            type: 'CategoryInfo',
            id: 2
          }
        }
      },
      NewsInfo: {
        fields: {
          name: {
            type: 'string',
            id: 1
          },
          newsID: {
            type: 'int32',
            id: 2
          },
          detail: {
            type: 'string',
            id: 3
          },
          brief: {
            type: 'string',
            id: 4
          }
        }
      },
      SizeInfo: {
        fields: {
          sizeID: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      ColorInfo: {
        fields: {
          colorID: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          hexValue: {
            type: 'string',
            id: 3
          }
        }
      },
      BuyerBriefOrderInfo: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          },
          buyerOrderListStateEnum: {
            type: 'BuyerOrderListStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          pid: {
            type: 'string',
            id: 4
          },
          productTitle: {
            type: 'string',
            id: 5
          },
          image: {
            type: 'string',
            id: 6
          },
          price: {
            type: 'int32',
            id: 7
          },
          color: {
            type: 'string',
            id: 8
          },
          size: {
            type: 'string',
            id: 9
          },
          measurement: {
            type: 'string',
            id: 10
          },
          news: {
            type: 'string',
            id: 11
          },
          orderButton: {
            rule: 'repeated',
            type: 'OrderButton',
            id: 12
          },
          isSeckillOrder: {
            type: 'bool',
            id: 13
          },
          orderPrice: {
            type: 'int32',
            id: 14
          },
          isOfficial: {
            type: 'bool',
            id: 15
          }
        }
      },
      SellerBriefOrderInfo: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          },
          sellerOrderListStateEnum: {
            type: 'SellerOrderListStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          pid: {
            type: 'string',
            id: 4
          },
          productTitle: {
            type: 'string',
            id: 5
          },
          image: {
            type: 'string',
            id: 6
          },
          price: {
            type: 'int32',
            id: 7
          },
          color: {
            type: 'string',
            id: 8
          },
          size: {
            type: 'string',
            id: 9
          },
          measurement: {
            type: 'string',
            id: 10
          },
          news: {
            type: 'string',
            id: 11
          },
          orderButton: {
            rule: 'repeated',
            type: 'OrderButton',
            id: 12
          },
          coldTimeLeft: {
            type: 'string',
            id: 13
          },
          isSeckillOrder: {
            type: 'bool',
            id: 14
          },
          orderPrice: {
            type: 'int32',
            id: 15
          }
        }
      },
      SellerBriefProductInfo: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          sellerProductStateEnum: {
            type: 'SellerProductStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          productTitle: {
            type: 'string',
            id: 4
          },
          image: {
            type: 'string',
            id: 5
          },
          price: {
            type: 'int32',
            id: 6
          },
          color: {
            type: 'string',
            id: 7
          },
          size: {
            type: 'string',
            id: 8
          },
          measurement: {
            type: 'string',
            id: 9
          },
          news: {
            type: 'string',
            id: 10
          },
          orderButton: {
            rule: 'repeated',
            type: 'OrderButton',
            id: 11
          },
          relatedOAID: {
            type: 'string',
            id: 12
          },
          appraisalGenuine: {
            type: 'bool',
            id: 13
          },
          appraisalType: {
            type: 'AppraisalType',
            id: 14
          },
          isSeckillProduct: {
            type: 'bool',
            id: 15
          },
          seckillPrice: {
            type: 'uint32',
            id: 16
          },
          seckillState: {
            type: 'TimeState',
            id: 17
          },
          seckillEndLeft: {
            type: 'string',
            id: 18
          }
        }
      },
      SellerProductDetailInfo: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          sellerProductStateEnum: {
            type: 'SellerProductStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          productTitle: {
            type: 'string',
            id: 4
          },
          image: {
            type: 'string',
            id: 5
          },
          price: {
            type: 'int32',
            id: 6
          },
          color: {
            type: 'string',
            id: 7
          },
          size: {
            type: 'string',
            id: 8
          },
          measurement: {
            type: 'string',
            id: 9
          },
          news: {
            type: 'string',
            id: 10
          },
          relatedOAID: {
            type: 'string',
            id: 11
          },
          appraisalGenuine: {
            type: 'bool',
            id: 12
          },
          returnAddress: {
            type: 'UserAddress',
            id: 13
          },
          serviceChargeRate: {
            type: 'string',
            id: 14
          },
          transferFeeRate: {
            type: 'string',
            id: 15
          },
          serviceCharge: {
            type: 'int32',
            id: 16
          },
          transferFee: {
            type: 'int32',
            id: 17
          },
          description: {
            type: 'string',
            id: 18
          },
          creatTime: {
            type: 'string',
            id: 19
          },
          orderButton: {
            rule: 'repeated',
            type: 'OrderButton',
            id: 20
          },
          appraisalType: {
            type: 'AppraisalType',
            id: 21
          }
        }
      },
      ShootImageInfo: {
        fields: {
          position: {
            type: 'string',
            id: 1
          },
          imageUrl: {
            type: 'string',
            id: 2
          },
          required: {
            type: 'bool',
            id: 3
          },
          imageID: {
            type: 'int32',
            id: 4
          }
        }
      },
      ProductOnSalePublishInfo: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          imageList: {
            rule: 'repeated',
            type: 'ShootImageInfo',
            id: 2
          },
          productCover: {
            type: 'string',
            id: 3
          },
          productName: {
            type: 'string',
            id: 4
          },
          attribute: {
            type: 'string',
            id: 5
          },
          sku: {
            type: 'string',
            id: 6
          },
          newDegree: {
            type: 'string',
            id: 7
          },
          kindID: {
            type: 'int32',
            id: 8
          },
          sendWord: {
            type: 'string',
            id: 9
          },
          sellPrice: {
            type: 'int32',
            id: 10
          },
          serviceFeeRate: {
            type: 'string',
            id: 11
          },
          serviceFee: {
            type: 'int32',
            id: 12
          },
          transferFeeRate: {
            type: 'string',
            id: 13
          },
          transferFee: {
            type: 'int32',
            id: 14
          },
          actualIncome: {
            type: 'int32',
            id: 15
          },
          address: {
            type: 'UserAddress',
            id: 16
          },
          brandID: {
            type: 'int32',
            id: 17
          }
        }
      },
      SellerOrderDetailInfo: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          },
          sellerOrderListStateEnum: {
            type: 'SellerOrderListStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          stateIntroduction: {
            type: 'string',
            id: 4
          },
          pid: {
            type: 'string',
            id: 5
          },
          creatTime: {
            type: 'string',
            id: 6
          },
          productTitle: {
            type: 'string',
            id: 7
          },
          image: {
            type: 'string',
            id: 8
          },
          price: {
            type: 'int32',
            id: 9
          },
          color: {
            type: 'string',
            id: 10
          },
          size: {
            type: 'string',
            id: 11
          },
          measurement: {
            type: 'string',
            id: 12
          },
          news: {
            type: 'string',
            id: 13
          },
          returnAddress: {
            type: 'UserAddress',
            id: 14
          },
          serviceCharge: {
            type: 'int32',
            id: 15
          },
          serviceChargeRate: {
            type: 'string',
            id: 16
          },
          transferFee: {
            type: 'int32',
            id: 17
          },
          transferFeeRate: {
            type: 'string',
            id: 18
          },
          record: {
            type: 'ExpressRecord',
            id: 19
          },
          expressNo: {
            type: 'string',
            id: 20
          },
          income: {
            type: 'int32',
            id: 21
          },
          orderButton: {
            rule: 'repeated',
            type: 'OrderButton',
            id: 22
          },
          canModifyAddr: {
            type: 'bool',
            id: 23
          },
          buyerPayTimeout: {
            type: 'string',
            id: 24
          },
          coldTimeLeft: {
            type: 'string',
            id: 25
          },
          deliverTimeout: {
            type: 'string',
            id: 26
          }
        }
      },
      BuyerOrderDetailInfo: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          },
          buyerOrderListStateEnum: {
            type: 'BuyerOrderListStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          stateIntroduction: {
            type: 'string',
            id: 4
          },
          pid: {
            type: 'string',
            id: 5
          },
          creatTime: {
            type: 'string',
            id: 6
          },
          productTitle: {
            type: 'string',
            id: 7
          },
          image: {
            type: 'string',
            id: 8
          },
          price: {
            type: 'int32',
            id: 9
          },
          freight: {
            type: 'int32',
            id: 10
          },
          cost: {
            type: 'int32',
            id: 11
          },
          color: {
            type: 'string',
            id: 12
          },
          size: {
            type: 'string',
            id: 13
          },
          measurement: {
            type: 'string',
            id: 14
          },
          news: {
            type: 'string',
            id: 15
          },
          receivingAddress: {
            type: 'UserAddress',
            id: 16
          },
          orderButton: {
            rule: 'repeated',
            type: 'OrderButton',
            id: 17
          },
          canModifyAddr: {
            type: 'bool',
            id: 18
          },
          payTimeout: {
            type: 'string',
            id: 19
          },
          payType: {
            type: 'string',
            id: 20
          },
          coldTimeLeft: {
            type: 'string',
            id: 21
          },
          record: {
            type: 'ExpressRecord',
            id: 22
          },
          expressNo: {
            type: 'string',
            id: 23
          },
          isPostage: {
            type: 'bool',
            id: 24
          },
          isOfficial: {
            type: 'bool',
            id: 25
          },
          bargainAmount: {
            type: 'int32',
            id: 26
          },
          orderType: {
            type: 'ProductOriginalType',
            id: 27
          }
        }
      },
      Banner: {
        fields: {
          bannerUrl: {
            type: 'string',
            id: 1
          },
          link: {
            type: 'string',
            id: 2
          }
        }
      },
      BrandRate: {
        fields: {
          brandName: {
            type: 'string',
            id: 1
          },
          rate: {
            type: 'int32',
            id: 2
          }
        }
      },
      SelectedAppraisalRecord: {
        fields: {
          nickname: {
            type: 'string',
            id: 1
          },
          avatar: {
            type: 'string',
            id: 2
          },
          creatTime: {
            type: 'string',
            id: 3
          },
          brandName: {
            type: 'string',
            id: 4
          },
          authenticity: {
            type: 'bool',
            id: 5
          },
          image: {
            rule: 'repeated',
            type: 'ImageInfo',
            id: 6
          }
        }
      },
      BriefAppraisalResult: {
        fields: {
          authenticity: {
            type: 'bool',
            id: 1
          },
          oaid: {
            type: 'string',
            id: 2
          },
          brand: {
            type: 'string',
            id: 3
          },
          exteriorUrl: {
            type: 'string',
            id: 4
          },
          timestamp: {
            type: 'string',
            id: 5
          }
        }
      },
      BiasedInfo: {
        fields: {
          grade: {
            rule: 'repeated',
            type: 'string',
            id: 1
          }
        }
      },
      SingleAppraisalResult: {
        fields: {
          authenticity: {
            type: 'bool',
            id: 1
          },
          grade: {
            type: 'string',
            id: 2
          },
          imageInfo: {
            type: 'ImageInfo',
            id: 3
          },
          biasedInfo: {
            rule: 'repeated',
            type: 'BiasedInfo',
            id: 4
          },
          pointKey: {
            type: 'string',
            id: 5
          },
          pointName: {
            type: 'string',
            id: 6
          }
        }
      },
      PointInfo: {
        fields: {
          necessity: {
            type: 'bool',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          pointKey: {
            type: 'string',
            id: 3
          },
          photoGuide: {
            type: 'string',
            id: 4
          },
          exampleImg: {
            type: 'string',
            id: 5
          },
          stickFigureImg: {
            type: 'string',
            id: 6
          },
          bigStickFigureImg: {
            type: 'string',
            id: 7
          }
        }
      },
      AIServiceCategoryInfo: {
        fields: {
          name: {
            type: 'string',
            id: 1
          },
          imageInfo: {
            type: 'ImageInfo',
            id: 2
          },
          categoryID: {
            type: 'int32',
            id: 3
          },
          isRelated: {
            type: 'bool',
            id: 4
          },
          hotSequence: {
            type: 'int32',
            id: 5
          },
          isEnd: {
            type: 'bool',
            id: 6
          },
          brandCnName: {
            type: 'string',
            id: 7
          }
        }
      },
      AIServiceCategoryInitial: {
        fields: {
          letter: {
            type: 'string',
            id: 1
          },
          categoryInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 2
          }
        }
      },
      AIServiceAppraisalBox: {
        fields: {
          x: {
            type: 'string',
            id: 1
          },
          y: {
            type: 'string',
            id: 2
          },
          width: {
            type: 'string',
            id: 3
          },
          height: {
            type: 'string',
            id: 4
          },
          radius: {
            type: 'string',
            id: 5
          }
        }
      },
      AIServicePointInfo: {
        fields: {
          necessity: {
            type: 'bool',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          pointId: {
            type: 'int32',
            id: 3
          },
          photoGuide: {
            type: 'string',
            id: 4
          },
          exampleImg: {
            type: 'string',
            id: 5
          },
          stickFigureImg: {
            type: 'string',
            id: 6
          },
          bigStickFigureImg: {
            type: 'string',
            id: 7
          }
        }
      },
      AIServiceOrder: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          OAID: {
            type: 'string',
            id: 2
          },
          imageURL: {
            type: 'string',
            id: 3
          },
          totalAmount: {
            type: 'int32',
            id: 4
          },
          time: {
            type: 'string',
            id: 5
          },
          hierarchy: {
            type: 'string',
            id: 6
          },
          kindID: {
            type: 'int32',
            id: 7
          },
          kindName: {
            type: 'string',
            id: 8
          },
          brandID: {
            type: 'int32',
            id: 9
          },
          brandName: {
            type: 'string',
            id: 10
          },
          seriesID: {
            type: 'int32',
            id: 11
          },
          seriesName: {
            type: 'string',
            id: 12
          },
          state: {
            type: 'AIServiceAppraisalOrderStateEnum',
            id: 13
          }
        }
      },
      AIServiceAppraisalReportSAItem: {
        fields: {
          SAID: {
            type: 'string',
            id: 1
          },
          image: {
            type: 'string',
            id: 2
          },
          pointName: {
            type: 'string',
            id: 3
          },
          grade: {
            type: 'string',
            id: 4
          },
          detection: {
            type: 'bool',
            id: 5
          },
          originalBox: {
            type: 'AIServiceAppraisalBox',
            id: 6
          },
          detectionBox: {
            type: 'AIServiceAppraisalBox',
            id: 7
          },
          showFake: {
            type: 'bool',
            id: 8
          },
          fakePoints: {
            rule: 'repeated',
            type: 'AIServiceAppraisalBox',
            id: 9
          },
          croppedImageURL: {
            type: 'string',
            id: 10
          },
          description: {
            type: 'string',
            id: 11
          }
        }
      },
      ClassifiedObject: {
        fields: {
          title: {
            type: 'string',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          price: {
            type: 'string',
            id: 3
          },
          imageUrl: {
            type: 'string',
            id: 4
          },
          content: {
            type: 'string',
            id: 5
          },
          itemID: {
            type: 'string',
            id: 6
          },
          color: {
            type: 'string',
            id: 7
          },
          size: {
            type: 'string',
            id: 8
          },
          sizeID: {
            type: 'string',
            id: 9
          },
          measurement: {
            type: 'string',
            id: 10
          },
          sku: {
            type: 'string',
            id: 11
          }
        }
      },
      CoordinateInfo: {
        fields: {
          x: {
            type: 'string',
            id: 1
          },
          y: {
            type: 'string',
            id: 2
          },
          w: {
            type: 'string',
            id: 3
          },
          h: {
            type: 'string',
            id: 4
          }
        }
      },
      CarouselItem: {
        fields: {
          image: {
            type: 'string',
            id: 1
          },
          link: {
            type: 'string',
            id: 2
          }
        }
      },
      SelectedProductInfo: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          title: {
            type: 'string',
            id: 2
          },
          image: {
            type: 'string',
            id: 3
          },
          news: {
            type: 'string',
            id: 4
          },
          cost: {
            type: 'int32',
            id: 5
          },
          brand: {
            type: 'string',
            id: 6
          },
          price: {
            type: 'int32',
            id: 7
          },
          size: {
            type: 'string',
            id: 8
          },
          measurement: {
            type: 'string',
            id: 9
          },
          relatedOaID: {
            type: 'string',
            id: 10
          },
          appraisalType: {
            type: 'AppraisalType',
            id: 11
          },
          isSeckillProduct: {
            type: 'bool',
            id: 12
          },
          seckillPrice: {
            type: 'uint32',
            id: 13
          },
          seckillState: {
            type: 'TimeState',
            id: 14
          },
          seckillEndLeft: {
            type: 'string',
            id: 15
          },
          selfRun: {
            type: 'bool',
            id: 16
          }
        }
      },
      ProductUserUpload: {
        fields: {
          imageInfo: {
            rule: 'repeated',
            type: 'ImageInfo',
            id: 1
          },
          cost: {
            type: 'int32',
            id: 2
          },
          price: {
            type: 'int32',
            id: 3
          },
          brandName: {
            type: 'string',
            id: 4
          },
          news: {
            type: 'string',
            id: 5
          },
          oaid: {
            type: 'string',
            id: 6
          },
          story: {
            type: 'string',
            id: 7
          },
          appraisalType: {
            type: 'AppraisalType',
            id: 8
          }
        }
      },
      ProductBasicInfo: {
        fields: {
          title: {
            type: 'string',
            id: 1
          },
          brand: {
            type: 'string',
            id: 2
          },
          itemID: {
            type: 'string',
            id: 3
          },
          releaseTime: {
            type: 'string',
            id: 4
          },
          releasePrice: {
            type: 'int32',
            id: 5
          },
          color: {
            type: 'string',
            id: 6
          },
          sizeInfo: {
            type: 'string',
            id: 7
          },
          material: {
            type: 'string',
            id: 8
          },
          imageInfo: {
            rule: 'repeated',
            type: 'ImageInfo',
            id: 9
          },
          measurement: {
            type: 'string',
            id: 10
          },
          kindID: {
            type: 'int32',
            id: 11
          },
          kindName: {
            type: 'string',
            id: 12
          },
          styleName: {
            type: 'string',
            id: 13
          },
          isSeckillProduct: {
            type: 'bool',
            id: 14
          },
          seckillPrice: {
            type: 'uint32',
            id: 15
          },
          seckillState: {
            type: 'TimeState',
            id: 16
          },
          seckillEndLeft: {
            type: 'string',
            id: 17
          },
          skc: {
            type: 'string',
            id: 18
          },
          mainPic: {
            type: 'string',
            id: 19
          },
          seckillProductId: {
            type: 'uint32',
            id: 20
          },
          seckillDate: {
            type: 'string',
            id: 21
          },
          seckillStartTime: {
            type: 'string',
            id: 22
          },
          seckillEndTime: {
            type: 'string',
            id: 23
          },
          bargainPrice: {
            type: 'uint32',
            id: 24
          }
        }
      },
      SkcInfo: {
        fields: {
          brandName: {
            type: 'string',
            id: 1
          },
          mainPic: {
            type: 'string',
            id: 2
          },
          brandID: {
            type: 'int32',
            id: 3
          },
          releasePrice: {
            type: 'int32',
            id: 4
          },
          proCount: {
            type: 'int32',
            id: 5
          },
          kindID: {
            type: 'int32',
            id: 6
          },
          skc: {
            type: 'string',
            id: 7
          },
          sku: {
            type: 'string',
            id: 8
          },
          newsDetails: {
            rule: 'repeated',
            type: 'NewPriceResult',
            id: 14
          }
        }
      },
      PersonCenterIcon: {
        fields: {
          iconTitle: {
            type: 'string',
            id: 1
          },
          iconImage: {
            type: 'string',
            id: 2
          },
          number: {
            type: 'int32',
            id: 3
          }
        }
      },
      ExpressRecord: {
        fields: {
          updateTime: {
            type: 'string',
            id: 1
          },
          content: {
            type: 'string',
            id: 2
          },
          comment: {
            type: 'string',
            id: 3
          }
        }
      },
      ExpressItem: {
        fields: {
          itemTitle: {
            type: 'string',
            id: 1
          },
          itemState: {
            type: 'bool',
            id: 2
          },
          hasDetail: {
            type: 'bool',
            id: 3
          },
          expressCompany: {
            type: 'string',
            id: 4
          },
          expressNumber: {
            type: 'string',
            id: 5
          },
          records: {
            rule: 'repeated',
            type: 'ExpressRecord',
            id: 6
          },
          isTitleHide: {
            type: 'bool',
            id: 7
          }
        }
      },
      OrderButton: {
        fields: {
          buttonEnum: {
            type: 'OrderButtonEnum',
            id: 1
          },
          buttonTitle: {
            type: 'string',
            id: 2
          }
        }
      },
      RunningCount: {
        fields: {
          flowType: {
            type: 'WalletRunningCountTypeEnum',
            id: 1
          },
          title: {
            type: 'string',
            id: 2
          },
          dateTime: {
            type: 'string',
            id: 3
          },
          amount: {
            type: 'int32',
            id: 4
          },
          orderID: {
            type: 'string',
            id: 5
          },
          reportID: {
            type: 'string',
            id: 6
          }
        }
      },
      HotBrandInfo: {
        fields: {
          brandID: {
            type: 'int32',
            id: 1
          },
          brandName: {
            type: 'string',
            id: 2
          },
          imageUrl: {
            type: 'string',
            id: 3
          }
        }
      },
      ProductUtilsItem: {
        fields: {
          serialNumber: {
            type: 'int32',
            id: 1
          },
          skc: {
            type: 'string',
            id: 2
          },
          productName: {
            type: 'string',
            id: 3
          },
          mainPic: {
            type: 'string',
            id: 4
          },
          kindName: {
            type: 'string',
            id: 5
          },
          brandEnName: {
            type: 'string',
            id: 6
          },
          seriesName: {
            type: 'string',
            id: 7
          },
          colorName: {
            type: 'string',
            id: 8
          },
          measurement: {
            type: 'string',
            id: 9
          },
          adaptCrowd: {
            type: 'string',
            id: 10
          },
          oldNew: {
            type: 'string',
            id: 11
          },
          provenance: {
            type: 'string',
            id: 12
          },
          styleName: {
            type: 'string',
            id: 13
          },
          materialName: {
            type: 'string',
            id: 14
          },
          sizeName: {
            type: 'string',
            id: 15
          },
          releasePrice: {
            type: 'string',
            id: 16
          },
          inStoreTime: {
            type: 'string',
            id: 17
          },
          itemID: {
            type: 'string',
            id: 18
          },
          status: {
            type: 'string',
            id: 19
          },
          brandID: {
            type: 'int32',
            id: 20
          },
          currentSkc: {
            type: 'string',
            id: 21
          },
          account: {
            type: 'string',
            id: 22
          },
          updateTime: {
            type: 'string',
            id: 23
          },
          kindID: {
            type: 'int32',
            id: 24
          },
          pid: {
            type: 'string',
            id: 25
          },
          source: {
            type: 'string',
            id: 26
          },
          sku: {
            type: 'string',
            id: 27
          }
        }
      },
      SearchMallPublishItem: {
        fields: {
          sku: {
            type: 'string',
            id: 1
          },
          mainPic: {
            type: 'string',
            id: 2
          },
          colorName: {
            type: 'string',
            id: 3
          },
          measurement: {
            type: 'string',
            id: 4
          },
          brandEnName: {
            type: 'string',
            id: 5
          },
          productName: {
            type: 'string',
            id: 6
          },
          brandName: {
            type: 'string',
            id: 7
          },
          sizeName: {
            type: 'string',
            id: 8
          },
          skc: {
            type: 'string',
            id: 9
          }
        }
      },
      NewClassifiedObject: {
        fields: {
          mainPic: {
            type: 'string',
            id: 1
          },
          brandEnName: {
            type: 'string',
            id: 2
          },
          productName: {
            type: 'string',
            id: 3
          },
          releasePrice: {
            type: 'string',
            id: 4
          },
          sku: {
            type: 'string',
            id: 5
          },
          sizeName: {
            type: 'string',
            id: 6
          },
          colorName: {
            type: 'string',
            id: 7
          },
          measurement: {
            type: 'string',
            id: 8
          },
          brandID: {
            type: 'string',
            id: 9
          },
          kindID: {
            type: 'string',
            id: 10
          }
        }
      },
      ProductPidObject: {
        fields: {
          cover: {
            type: 'string',
            id: 1
          },
          newsName: {
            type: 'string',
            id: 2
          },
          brandEnName: {
            type: 'string',
            id: 3
          },
          productName: {
            type: 'string',
            id: 4
          },
          releasePrice: {
            type: 'string',
            id: 5
          },
          actualPrice: {
            type: 'string',
            id: 6
          },
          sku: {
            type: 'string',
            id: 7
          },
          pid: {
            type: 'string',
            id: 8
          }
        }
      },
      LotteryPoolItem: {
        fields: {
          lotteryPoolId: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          lotteryPoolPic: {
            type: 'string',
            id: 3
          },
          startTime: {
            type: 'string',
            id: 4
          },
          endTime: {
            type: 'string',
            id: 5
          },
          lotteryStatus: {
            type: 'string',
            id: 6
          },
          status: {
            type: 'string',
            id: 7
          },
          createTime: {
            type: 'string',
            id: 8
          },
          lotteryNum: {
            type: 'int32',
            id: 9
          }
        }
      },
      UserPoolItem: {
        fields: {
          userPoolId: {
            type: 'int32',
            id: 1
          },
          phone: {
            type: 'string',
            id: 2
          },
          status: {
            type: 'string',
            id: 3
          }
        }
      },
      FingerprintItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          phone: {
            type: 'string',
            id: 2
          },
          mainPic: {
            type: 'string',
            id: 3
          },
          numberIDCard: {
            type: 'string',
            id: 4
          },
          createTime: {
            type: 'string',
            id: 5
          }
        }
      },
      CheckItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          phone: {
            type: 'string',
            id: 2
          },
          mainPic: {
            type: 'string',
            id: 3
          },
          numberIDCard: {
            type: 'string',
            id: 4
          },
          checkTime: {
            type: 'string',
            id: 5
          },
          status: {
            type: 'string',
            id: 6
          }
        }
      },
      AppraisalCouponItem: {
        fields: {
          couponNo: {
            type: 'string',
            id: 1
          },
          validTerm: {
            type: 'string',
            id: 2
          },
          OAID: {
            type: 'string',
            id: 4
          },
          dueSoon: {
            type: 'bool',
            id: 5
          }
        }
      },
      UserInfo: {
        fields: {
          phone: {
            type: 'string',
            id: 1
          },
          nickName: {
            type: 'string',
            id: 2
          },
          uid: {
            type: 'int32',
            id: 3
          },
          createTime: {
            type: 'string',
            id: 4
          },
          appOrigin: {
            type: 'string',
            id: 5
          },
          activityOrigin: {
            type: 'string',
            id: 6
          },
          sellOrderNum: {
            type: 'int32',
            id: 7
          },
          buyOrderNum: {
            type: 'int32',
            id: 8
          },
          authenticateNum: {
            type: 'int32',
            id: 9
          },
          isJoinCommunity: {
            type: 'string',
            id: 10
          },
          sex: {
            type: 'string',
            id: 11
          },
          location: {
            type: 'string',
            id: 12
          },
          addressDetail: {
            type: 'string',
            id: 13
          },
          wx: {
            type: 'string',
            id: 14
          },
          inviterPhone: {
            type: 'string',
            id: 15
          },
          inviteNum: {
            type: 'uint32',
            id: 16
          }
        }
      },
      AuthenticateInfo: {
        fields: {
          authNum: {
            type: 'string',
            id: 1
          },
          freeAuthNum: {
            type: 'string',
            id: 2
          },
          payAuthNum: {
            type: 'string',
            id: 3
          },
          cumulativeConsumption: {
            type: 'int32',
            id: 4
          }
        }
      },
      ExpertAppraisalInfo: {
        fields: {
          authNum: {
            type: 'string',
            id: 1
          },
          cumulativeConsumption: {
            type: 'int32',
            id: 4
          }
        }
      },
      AIClassify: {
        fields: {
          matchOk: {
            type: 'int32',
            id: 1
          },
          matchFail: {
            type: 'int32',
            id: 2
          },
          checkFail: {
            type: 'int32',
            id: 3
          },
          total: {
            type: 'int32',
            id: 4
          }
        }
      },
      RecycleStat: {
        fields: {
          tradeOkCount: {
            type: 'int32',
            id: 1
          },
          detail: {
            type: 'string',
            id: 2
          },
          totalMoney: {
            type: 'int32',
            id: 3
          }
        }
      },
      ConsignStat: {
        fields: {
          tradeOkCount: {
            type: 'int32',
            id: 1
          },
          detail: {
            type: 'string',
            id: 2
          },
          totalMoney: {
            type: 'int32',
            id: 3
          }
        }
      },
      BuyInfo: {
        fields: {
          success: {
            type: 'int32',
            id: 1
          },
          consume: {
            type: 'int32',
            id: 3
          },
          averagePrice: {
            type: 'int32',
            id: 4
          },
          details: {
            type: 'BuyDetails',
            id: 5
          }
        }
      },
      BuyDetails: {
        fields: {
          unpay: {
            type: 'int32',
            id: 1
          },
          unreceive: {
            type: 'int32',
            id: 2
          },
          success: {
            type: 'int32',
            id: 3
          },
          fatal: {
            type: 'int32',
            id: 4
          }
        }
      },
      SellInfo: {
        fields: {
          success: {
            type: 'int32',
            id: 1
          },
          details: {
            type: 'SellDetails',
            id: 2
          },
          consume: {
            type: 'int32',
            id: 3
          }
        }
      },
      SellDetails: {
        fields: {
          unpay: {
            type: 'int32',
            id: 1
          },
          unreceive: {
            type: 'int32',
            id: 2
          },
          success: {
            type: 'int32',
            id: 3
          },
          fatal: {
            type: 'int32',
            id: 4
          }
        }
      },
      Manage: {
        fields: {
          id: {
            type: 'string',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          createTime: {
            type: 'int64',
            id: 3
          }
        }
      },
      BulletinReport: {
        fields: {
          username: {
            type: 'string',
            id: 1
          },
          kindName: {
            type: 'string',
            id: 2
          },
          brandName: {
            type: 'string',
            id: 3
          },
          seriesName: {
            type: 'string',
            id: 4
          },
          result: {
            type: 'AppraisalResultEnum',
            id: 5
          },
          reportID: {
            type: 'string',
            id: 6
          },
          appraisalType: {
            type: 'AppraisalType',
            id: 7
          },
          avatar: {
            type: 'string',
            id: 8
          }
        }
      },
      HolmesResult: {
        fields: {
          mainPic: {
            rule: 'repeated',
            type: 'string',
            id: 1
          },
          brandEnName: {
            type: 'string',
            id: 2
          },
          seriesName: {
            type: 'string',
            id: 3
          },
          productName: {
            type: 'string',
            id: 4
          },
          onSaleCount: {
            type: 'int32',
            id: 5
          },
          newsDetails: {
            rule: 'repeated',
            type: 'NewPriceResult',
            id: 6
          },
          skc: {
            type: 'string',
            id: 7
          },
          colorName: {
            type: 'string',
            id: 8
          },
          productCode: {
            type: 'string',
            id: 9
          },
          measurement: {
            type: 'string',
            id: 10
          },
          releasePrice: {
            type: 'string',
            id: 11
          },
          releaseDate: {
            type: 'string',
            id: 12
          },
          origin: {
            type: 'string',
            id: 13
          },
          forPeople: {
            type: 'string',
            id: 14
          },
          materialStr: {
            type: 'string',
            id: 15
          },
          overflowPrice: {
            type: 'string',
            id: 16
          },
          worldPriceItem: {
            rule: 'repeated',
            type: 'WorldPriceItem',
            id: 19
          },
          productNewsItem: {
            rule: 'repeated',
            type: 'ProductNewsItem',
            id: 20
          },
          skcList: {
            rule: 'repeated',
            type: 'string',
            id: 21
          },
          kindId: {
            type: 'int32',
            id: 22
          },
          brandId: {
            type: 'int32',
            id: 23
          },
          description: {
            type: 'string',
            id: 24
          },
          seriesId: {
            type: 'string',
            id: 25
          },
          sku: {
            type: 'string',
            id: 26
          },
          brandLogo: {
            type: 'string',
            id: 27
          },
          size: {
            type: 'string',
            id: 28
          }
        }
      },
      NewPriceResult: {
        fields: {
          newOld: {
            type: 'string',
            id: 1
          },
          price: {
            type: 'string',
            id: 2
          }
        }
      },
      SimilarItem: {
        fields: {
          mainPic: {
            type: 'string',
            id: 1
          },
          saleCount: {
            type: 'int32',
            id: 2
          },
          skc: {
            type: 'string',
            id: 3,
            options: {
              deprecated: true
            }
          },
          newsDetails: {
            rule: 'repeated',
            type: 'NewPriceResult',
            id: 4
          },
          brandEnName: {
            type: 'string',
            id: 5
          },
          seriesName: {
            type: 'string',
            id: 6
          },
          productName: {
            type: 'string',
            id: 7
          },
          sizeName: {
            type: 'string',
            id: 8
          },
          kindId: {
            type: 'int32',
            id: 23
          },
          brandId: {
            type: 'int32',
            id: 24
          },
          sku: {
            type: 'string',
            id: 11
          }
        }
      },
      WorldPriceItem: {
        fields: {
          country: {
            type: 'string',
            id: 1
          },
          websitePrice: {
            type: 'string',
            id: 2
          },
          rmbPrice: {
            type: 'string',
            id: 3
          }
        }
      },
      ProductNewsItem: {
        fields: {
          graphPrice: {
            rule: 'repeated',
            type: 'GraphPriceItem',
            id: 1
          },
          networkPrice: {
            rule: 'repeated',
            type: 'NetworkPriceItem',
            id: 2
          },
          newsName: {
            type: 'string',
            id: 3
          },
          sevenDayCompare: {
            type: 'string',
            id: 4
          },
          newsNetWorkNum: {
            type: 'string',
            id: 5
          },
          netPrice: {
            type: 'string',
            id: 6
          },
          isNone: {
            type: 'bool',
            id: 7
          }
        }
      },
      GraphPriceItem: {
        fields: {
          time: {
            type: 'string',
            id: 1
          },
          source: {
            type: 'string',
            id: 2
          },
          price: {
            type: 'string',
            id: 3
          }
        }
      },
      NetworkPriceItem: {
        fields: {
          salePrice: {
            type: 'string',
            id: 1
          },
          source: {
            type: 'string',
            id: 2
          },
          productNum: {
            type: 'string',
            id: 3
          }
        }
      },
      SeckillProduct: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          cover: {
            type: 'string',
            id: 2
          },
          productName: {
            type: 'string',
            id: 3
          },
          sellPrice: {
            type: 'uint32',
            id: 4
          },
          seckillPrice: {
            type: 'uint32',
            id: 5
          },
          newDegree: {
            type: 'string',
            id: 6
          },
          button: {
            type: 'SeckillButton',
            id: 7
          },
          seckillProductId: {
            type: 'uint32',
            id: 8
          },
          oaid: {
            type: 'string',
            id: 9
          },
          brand: {
            type: 'string',
            id: 10
          },
          selfRun: {
            type: 'bool',
            id: 11
          }
        }
      },
      SeckillSingleRound: {
        fields: {
          state: {
            type: 'TimeState',
            id: 1
          },
          itemList: {
            rule: 'repeated',
            type: 'SeckillProduct',
            id: 2
          },
          startTime: {
            type: 'string',
            id: 3
          },
          endTime: {
            type: 'string',
            id: 4
          },
          timeLeft: {
            type: 'string',
            id: 5
          },
          roundId: {
            type: 'uint32',
            id: 6
          }
        }
      },
      ConfirmOrderProduct: {
        fields: {
          image: {
            type: 'string',
            id: 1
          },
          newDegree: {
            type: 'string',
            id: 2
          },
          color: {
            type: 'string',
            id: 3
          },
          size: {
            type: 'string',
            id: 4
          },
          measure: {
            type: 'string',
            id: 5
          },
          name: {
            type: 'string',
            id: 6
          },
          sellPrice: {
            type: 'int32',
            id: 7
          },
          releasePrice: {
            type: 'string',
            id: 8
          },
          isOfficial: {
            type: 'bool',
            id: 9
          },
          bargainAmount: {
            type: 'int32',
            id: 10
          },
          orderType: {
            type: 'ProductOriginalType',
            id: 11
          }
        }
      },
      BargainProductItem: {
        fields: {
          BasicInfo: {
            type: 'BargainBasicItem',
            id: 1
          }
        }
      },
      BargainBasicItem: {
        fields: {
          mainPic: {
            type: 'string',
            id: 1
          },
          releasePrice: {
            type: 'int32',
            id: 2
          },
          actualPrice: {
            type: 'int32',
            id: 3
          },
          isOfficial: {
            type: 'bool',
            id: 4
          },
          skc: {
            type: 'string',
            id: 5
          },
          id: {
            type: 'uint32',
            id: 6
          },
          endTime: {
            type: 'int64',
            id: 7
          },
          name: {
            type: 'string',
            id: 8
          },
          sortTime: {
            type: 'int64',
            id: 9
          },
          flowStatus: {
            type: 'int32',
            id: 10
          },
          productStatus: {
            type: 'BargainLimitType',
            id: 11
          },
          productMyStatus: {
            type: 'BargainLimitState',
            id: 12
          },
          newsName: {
            type: 'string',
            id: 13
          },
          bargainPrice: {
            type: 'int32',
            id: 14
          },
          joinActivityCount: {
            type: 'int32',
            id: 15
          },
          countDown: {
            type: 'int32',
            id: 16
          },
          payTime: {
            type: 'int32',
            id: 17
          },
          pidStr: {
            type: 'string',
            id: 18
          },
          orderNo: {
            type: 'string',
            id: 19
          },
          productStatusInt: {
            type: 'int32',
            id: 20
          },
          productMyStatusInt: {
            type: 'int32',
            id: 21
          },
          distancePrice: {
            type: 'int32',
            id: 22
          },
          reductionPrice: {
            type: 'int32',
            id: 23
          },
          reductionOrderPrice: {
            type: 'int32',
            id: 24
          },
          costPrice: {
            type: 'int32',
            id: 25
          },
          isSub: {
            type: 'bool',
            id: 26
          },
          remainderNum: {
            type: 'int32',
            id: 27
          }
        }
      },
      MyBargainProductItem: {
        fields: {
          BasicInfo: {
            type: 'BargainBasicItem',
            id: 1
          }
        }
      },
      BargainDetailItem: {
        fields: {
          endTime: {
            type: 'int64',
            id: 1
          },
          mainPic: {
            type: 'string',
            id: 2
          },
          releasePrice: {
            type: 'int32',
            id: 3
          },
          actualPrice: {
            type: 'int32',
            id: 4
          },
          remainderNum: {
            type: 'int32',
            id: 5
          },
          saleNum: {
            type: 'int32',
            id: 6
          },
          bargainRange: {
            type: 'string',
            id: 7
          },
          helpBargainInfo: {
            rule: 'repeated',
            type: 'HelpBargainItem',
            id: 8
          },
          payMethods: {
            type: 'BargainPayMethods',
            id: 9
          },
          activityId: {
            type: 'uint32',
            id: 10
          },
          pidStr: {
            type: 'string',
            id: 11
          },
          countDown: {
            type: 'int32',
            id: 12
          },
          uid: {
            type: 'int32',
            id: 13
          },
          distancePrice: {
            type: 'int32',
            id: 14
          },
          reductionPrice: {
            type: 'int32',
            id: 15
          },
          bargainPrice: {
            type: 'int32',
            id: 16
          },
          isFirst: {
            type: 'bool',
            id: 17
          },
          userImage: {
            type: 'string',
            id: 18
          },
          name: {
            type: 'string',
            id: 19
          },
          isOfficial: {
            type: 'bool',
            id: 20
          },
          newsName: {
            type: 'string',
            id: 21
          },
          bargainInfoId: {
            type: 'uint32',
            id: 22
          },
          like: {
            type: 'bool',
            id: 23
          }
        }
      },
      HelpBargainItem: {
        fields: {
          userImage: {
            type: 'string',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          helpPrice: {
            type: 'int32',
            id: 3
          }
        }
      },
      BroadcastItem: {
        fields: {
          avatar: {
            type: 'string',
            id: 1
          },
          content: {
            type: 'string',
            id: 2
          }
        }
      },
      PromptMessageItem: {
        fields: {
          bargainId: {
            type: 'uint32',
            id: 1
          },
          title: {
            type: 'string',
            id: 2
          },
          mainPic: {
            type: 'string',
            id: 3
          },
          bargainPrice: {
            type: 'int32',
            id: 4
          },
          distancePrice: {
            type: 'int32',
            id: 5
          },
          reductionPrice: {
            type: 'int32',
            id: 6
          },
          completeBargainTime: {
            type: 'string',
            id: 7
          },
          userName: {
            type: 'string',
            id: 8
          },
          countDown: {
            type: 'int32',
            id: 9
          },
          userPic: {
            type: 'string',
            id: 10
          },
          pidStr: {
            type: 'string',
            id: 11
          }
        }
      },
      UserType: {
        values: {
          ORDINARYUSER: 0,
          SMALLBUSSINESS: 1,
          ENTERPRISE: 2,
          STAFF: 3,
          TESTUSER: 4
        }
      },
      LoginType: {
        values: {
          WECHAT: 0,
          WEIBO: 1,
          APPLE: 2
        }
      },
      SelectedProductListEnum: {
        values: {
          SelectedProductListEnum_Default: 0,
          SelectedProductListEnum_PriceAscending: 1,
          SelectedProductListEnum_PriceDescending: 2,
          SelectedProductListEnum_NewProductFirst: 3
        }
      },
      SellerProductStateEnum: {
        values: {
          SellerProductStateEnum_ToBeBid: 0,
          SellerProductStateEnum_OnSale: 1,
          SellerProductStateEnum_SoldOut: 2,
          SellerProductStateEnum_TemporaryClosed: 3,
          SellerProductStateEnum_FavoriteClosed: 4
        }
      },
      CategoryEnum: {
        values: {
          CategoryEnum_Kind: 0,
          CategoryEnum_Brand: 1,
          CategoryEnum_Series: 2
        }
      },
      BuyerOrderStateEnum: {
        values: {
          BuyerOrderStateEnum_ToBePaid: 0,
          BuyerOrderStateEnum_ToBeDelivered: 1,
          BuyerOrderStateEnum_ToBeReceived: 2,
          BuyerOrderStateEnum_SuccessfulTrade: 3,
          BuyerOrderStateEnum_FailedTrade: 4
        }
      },
      BuyerOrderListStateEnum: {
        values: {
          BuyerOrderListStateEnum_ToBePaid: 0,
          BuyerOrderListStateEnum_SellerToDeliver: 1,
          BuyerOrderListStateEnum_DeliverToPlatform: 2,
          BuyerOrderListStateEnum_PlatformReceived: 3,
          BuyerOrderListStateEnum_PlatformAppraisal: 4,
          BuyerOrderListStateEnum_PlatformToDeliver: 5,
          BuyerOrderListStateEnum_PlatformHaDelivered: 6,
          BuyerOrderListStateEnum_SuccessfulTrade: 7,
          BuyerOrderListStateEnum_FailedTrade: 8
        }
      },
      SellerOrderStateEnum: {
        values: {
          SellerOrderStateEnum_OnSale: 0,
          SellerOrderStateEnum_ToBeDelivered: 1,
          SellerOrderStateEnum_HadDelivered: 2,
          SellerOrderStateEnum_SuccessfulTrade: 3,
          SellerOrderStateEnum_FailedTrade: 4
        }
      },
      SellerOrderListStateEnum: {
        values: {
          SellerOrderListStateEnum_ToBePaid: 0,
          SellerOrderListStateEnum_ToBeDeliver: 1,
          SellerOrderListStateEnum_DeliverToPlatform: 2,
          SellerOrderListStateEnum_PlatformReceived: 3,
          SellerOrderListStateEnum_PlatformAppraisal: 4,
          SellerOrderListStateEnum_SuccessfulTrade: 5,
          SellerOrderListStateEnum_FailedTrade: 6
        }
      },
      ProductSellStateEnum: {
        values: {
          ProductionSellStateEnum_Default: 0,
          ProductionSellStateEnum_InTransaction: 1,
          ProductionSellStateEnum_SoldOut: 2
        }
      },
      OrderButtonEnum: {
        values: {
          OrderButtonEnum_Closed: 0,
          OrderButtonEnum_AddOAID: 1,
          OrderButtonEnum_RenewOAID: 2,
          OrderButtonEnum_Offer: 3,
          OrderButtonEnum_PutOnShelf: 4,
          OrderButtonEnum_Delete: 5,
          OrderButtonEnum_Detail: 6,
          OrderButtonEnum_WannaDeliver: 7,
          OrderButtonEnum_NotSell: 8,
          OrderButtonEnum_Express: 9,
          OrderButtonEnum_Pay: 10,
          OrderButtonEnum_CancelOrder: 11,
          OrderButtonEnum_ConfirmAddress: 12,
          OrderButtonEnum_Edit: 13,
          OrderButtonEnum_Recycle: 14
        }
      },
      WalletRunningCountTypeEnum: {
        values: {
          WalletRunningCountTypeEnum_All: 0,
          WalletRunningCountTypeEnum_Income: 1,
          WalletRunningCountTypeEnum_Withdraw: 2,
          WalletRunningCountTypeEnum_EARecycle: 3,
          WalletRunningCountTypeEnum_Consign: 4,
          WalletRunningCountTypeEnum_ConsignAdvancePayment: 5
        }
      },
      AIServiceAppraisalOrderStateEnum: {
        values: {
          AIServiceAppraisalOrderStateEnum_All: 0,
          AIServiceAppraisalOrderStateEnum_Unpaid: 1,
          AIServiceAppraisalOrderStateEnum_True: 2,
          AIServiceAppraisalOrderStateEnum_False: 3,
          AIServiceAppraisalOrderStateEnum_Unknown: 4
        }
      },
      RegisterType: {
        values: {
          WECAHT_DEFAULT: 0,
          WECAHT_WAVE_SISTER: 1,
          WECHAT_APPRAISAL_WELCOME: 2,
          WECHAT_DOUBLE_SEVENTH_WELCOME: 3,
          WECHAT_ZHIER: 4,
          WECHAT_SECKILL_WELCOME: 5,
          WECHAT_BYTE_WELCOME: 6,
          WECHAT_BARGAIN_WELCOME: 7
        }
      },
      ExpertAppraisalOrderStateEnum: {
        values: {
          ExpertAppraisalOrderStateEnum_ALL: 0,
          ExpertAppraisalOrderStateEnum_Unpaid: 1,
          ExpertAppraisalOrderStateEnum_True: 2,
          ExpertAppraisalOrderStateEnum_False: 3
        }
      },
      AppraisalType: {
        values: {
          AppraisalType_Unknown: 0,
          AppraisalType_AI: 1,
          AppraisalType_EA: 2
        }
      },
      EnableState: {
        values: {
          EnableState_All: 0,
          EnableState_Enabled: 1,
          EnableState_Disabled: 2
        }
      },
      IsSeckill: {
        values: {
          IsSeckill_All: 0,
          IsSeckill_Yes: 1,
          IsSeckill_No: 2
        }
      },
      AppraisalResultEnum: {
        values: {
          AppraisalResultEnum_None: 0,
          AppraisalResultEnum_True: 1,
          AppraisalResultEnum_False: 2,
          AppraisalResultEnum_Unknown: 3
        }
      },
      SeckillButton: {
        values: {
          SeckillButtonAll: 0,
          GrapAtOnce: 1,
          SoldOut: 2,
          AlarmMe: 3,
          CancelAlarm: 4,
          SeckillClose: 5
        }
      },
      TimeState: {
        values: {
          TimeStateAll: 0,
          TimeStateUnderWay: 1,
          TimeStateBeforeStart: 2,
          TimeStateEnded: 3
        }
      },
      ServiceTypeEnum: {
        values: {
          ST_Mall: 0,
          ST_AIAppraisal: 1,
          ST_AIClassify: 2,
          ST_AIEvaluate: 3,
          ST_ExpertAppraisal: 4,
          ST_Consign: 5,
          ST_Recycle: 6
        }
      },
      ProductDetailButton: {
        values: {
          ProductAny: 0,
          ProductSell: 1,
          ProductSold: 2,
          ProductTemporaryDown: 3,
          ProductPermanentDown: 4
        }
      },
      SubscribeState: {
        values: {
          SubscribeAny: 0,
          SubscribeYes: 1,
          SubscribeNo: 2
        }
      },
      AppPlatform: {
        values: {
          PlatformAny: 0,
          PlatformWechat: 1,
          PlatformByteDance: 2
        }
      },
      AppSource: {
        values: {
          AppSourceAny: 0,
          AppSourceWechatBXJ: 1,
          AppSourceByteDanceBXJ: 2,
          AppSourceH5: 3
        }
      },
      thirdSourcePlatform: {
        values: {
          PlatformBao: 0,
          PlatformFeiYu: 1,
          PlatformHongBuLin: 2,
          PlatformChenZhen: 3,
          PlatformSiKu: 4,
          PlatformXinShang: 5,
          PlatformZhiEr: 6,
          PlatformPangHu: 7,
          PlatformYiErSan: 8,
          PlatformMingJian: 9,
          PlatformBaiGe: 10
        }
      },
      OrderType: {
        values: {
          OrderTypeAny: 0,
          OrderTypeProduct: 1,
          OrderTypeAiAppraisal: 2,
          OrderTypeExpertAppraisal: 3,
          OrderTypeConsign: 4,
          OrderTypeRecycle: 5
        }
      },
      PersonalBuyState: {
        values: {
          BuyOrderListStateEnum_ToPay: 0,
          BuyOrderListStateEnum_ToDeliver: 1,
          BuyOrderListStateEnum_ToReceive: 2,
          BuyOrderListStateEnum_Complete: 3
        }
      },
      PersonalRecycleState: {
        values: {
          RecycleOrderListStateEnum_ToDeliver: 0,
          RecycleOrderListStateEnum_PlatformCheck: 1,
          RecycleOrderListStateEnum_ConfirmPrice: 2,
          RecycleOrderListStateEnum_Complete: 3
        }
      },
      PersonalConsignState: {
        values: {
          ConsignOrderListStateEnum_ToDeliver: 0,
          ConsignOrderListStateEnum_PlatformCheck: 1,
          ConsignOrderListStateEnum_ConfirmPrice: 2,
          ConsignOrderListStateEnum_PlatformSale: 3
        }
      },
      PersonalSaleState: {
        values: {
          SaleOrderListStateEnum_OnSale: 0,
          SaleOrderListStateEnum_ToDeliver: 1,
          SaleOrderListStateEnum_Received: 2,
          SaleOrderListStateEnum_Complete: 3
        }
      },
      PageEnum: {
        values: {
          PageEnum_Mall: 0,
          PageEnum_Live: 1,
          PageEnum_Sale: 2,
          PageEnum_Appraisal: 3,
          PageEnum_Homepage: 4
        }
      },
      YesOrNoChoice: {
        values: {
          YesOrNoChoiceAny: 0,
          YesOrNoChoiceYes: 1,
          YesOrNoChoiceNo: 2
        }
      },
      BargainMessage: {
        values: {
          BargainMessageAny: 0,
          BargainMessageNoSuccess: 1,
          BargainMessageOne: 2,
          BargainMessageSale: 3
        }
      },
      BargainLimitType: {
        values: {
          BargainLimitTypeAny: 0,
          BargainLimitTypeNotJoin: 1,
          BargainLimitTypeJoin: 2,
          BargainLimitTypeGlare: 3,
          BargainLimitTypeOver: 4
        }
      },
      BargainLimitState: {
        values: {
          BargainLimitStateAny: 0,
          BargainNOAndNotOrderAndStart: 1,
          BargainNOAndNotOrderAndEnd: 2,
          BargainNOAndNotOrderAndOver: 3,
          BargainNOAndOrderNotPayAndStart: 4,
          BargainNOAndOrderNotPayAndOver: 5,
          BargainNOAndOrderPayAndStart: 6,
          BargainNOAndOrderPayAndEnd: 7,
          BargainNOAndOrderPayAndOver: 8,
          BargainOKAndNotOrderAndStart: 9,
          BargainOKAndNotOrderAndEnd: 10,
          BargainOKAndNotOrderAndOver: 11,
          BargainOKAndOrderNotPayAndStart: 12,
          BargainOKAndOrderNotPayAndOver: 13,
          BargainOKAndOrderPayAndStart: 14,
          BargainOKAndOrderPayAndEnd: 15,
          BargainOKAndOrderPayAndOver: 16,
          BargainAgain: 17,
          BargainAllOkUser: 18,
          BargainAllOkUserOver: 19
        }
      },
      BargainPayMethods: {
        values: {
          BargainPayMethodsAny: 0,
          BargainPayMethodsOriginalPay: 1,
          BargainPayMethodsDiscountPay: 2,
          BargainPayMethodsAnonPay: 3,
          BargainPayMethodsPay: 4
        }
      },
      BargainOpMethods: {
        values: {
          BargainOpMethodsAny: 0,
          BargainOpMethodsSystem: 1,
          BargainOpMethodsUser: 2
        }
      },
      ProductOriginalType: {
        values: {
          BargainOpProductTypeAny: 0,
          BargainOpProductTypeSystem: 1,
          BargainOpProductTypeSeckill: 2,
          BargainOpProductTypeBargain: 3
        }
      },
      RecycleRegisterType: {
        values: {
          RecycleRegisterType_Default: 0,
          RecycleRegisterType_Recycle: 1,
          RecycleRegisterType_Consign: 2,
          RecycleRegisterType_OldForNew: 3
        }
      },
      ContactTime: {
        values: {
          ContactTime_Default: 0,
          ContactTime_AnyTime: 1,
          ContactTime_10to12: 2,
          ContactTime_13to15: 3,
          ContactTime_15to17: 4,
          ContactTime_17to19: 5,
          ContactTime_Weekend: 6
        }
      },
      BargainOpShare: {
        values: {
          BargainOpShareAny: 0,
          BargainOpShareCard: 1,
          BargainOpSharePoster: 2
        }
      },
      BaoOrderButtonEnum: {
        values: {
          BaoOrder_CancelOrder: 0,
          BaoOrder_ConfirmReceive: 1,
          BaoOrder_StartCheck: 2,
          BaoOrder_CheckPass: 3,
          BaoOrder_CheckFail: 4,
          BaoOrder_AppraisalPass: 5,
          BaoOrder_AppraisalFail: 6,
          BaoOrder_AppraisalRefused: 7,
          BaoOrder_SendBackSeller: 8,
          BaoOrder_SendToBuyer: 9,
          BaoOrder_Refund: 10,
          BaoOrder_Remit: 11,
          BaoOrder_Detail: 12,
          BaoOrder_GoToAdd: 13,
          BaoOrder_NoProcess: 14,
          BaoOrder_RemitAgain: 15,
          BaoOrder_RemitManually: 16
        }
      },
      IsActEnum: {
        values: {
          SecKill_BarGain: 0,
          SecKill_Act: 1,
          BarGain_Act: 2,
          SecKill_BarGain_NotReady: 3
        }
      },
      TSManagePageRequest: {
        fields: {}
      },
      TSManagePageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          manage: {
            rule: 'repeated',
            type: 'Manage',
            id: 3
          }
        }
      },
      TSHomePageSwitchRequest: {
        fields: {}
      },
      TSHomePageSwitchResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          show: {
            type: 'bool',
            id: 3
          },
          imageUrl: {
            type: 'string',
            id: 4
          },
          path: {
            type: 'string',
            id: 5
          },
          type: {
            type: 'int32',
            id: 6
          }
        }
      },
      TSDetailConfigRequest: {
        fields: {}
      },
      TSDetailConfigResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          demoImgUrl: {
            type: 'string',
            id: 3
          },
          miniProgramCodeUrl: {
            type: 'string',
            id: 4
          },
          publicCode: {
            type: 'string',
            id: 5
          }
        }
      },
      TSSisterGenMatchResultRequest: {
        fields: {
          imageUrl: {
            type: 'string',
            id: 1
          },
          matchImg: {
            type: 'string',
            id: 2
          },
          grade: {
            type: 'int32',
            id: 3
          },
          num: {
            type: 'int32',
            id: 4
          }
        }
      },
      TSSisterGenMatchResultResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          matchPerson: {
            type: 'string',
            id: 3
          },
          grade: {
            type: 'int32',
            id: 4
          },
          resultUrl: {
            type: 'string',
            id: 5
          },
          famousQuotes: {
            type: 'string',
            id: 6
          },
          styleDes: {
            type: 'string',
            id: 7
          },
          matchBag: {
            type: 'string',
            id: 8
          },
          faceDes: {
            type: 'string',
            id: 9
          },
          matchImg: {
            type: 'string',
            id: 10
          },
          num: {
            type: 'int32',
            id: 11
          },
          bag: {
            type: 'RecommendedBag',
            id: 12
          }
        },
        nested: {
          RecommendedBag: {
            fields: {
              brandName: {
                type: 'string',
                id: 1
              },
              productName: {
                type: 'string',
                id: 2
              },
              releasePrice: {
                type: 'string',
                id: 3
              },
              price: {
                type: 'string',
                id: 4
              },
              pid: {
                type: 'string',
                id: 5
              },
              imageUrl: {
                type: 'string',
                id: 6
              }
            }
          }
        }
      },
      TSAppraisalEventPageRequest: {
        fields: {}
      },
      TSAppraisalEventPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          joinCount: {
            type: 'int32',
            id: 3
          },
          receivedCount: {
            type: 'int32',
            id: 4
          },
          freeAppraisalCount: {
            type: 'int32',
            id: 5
          },
          button: {
            type: 'string',
            id: 6
          },
          friends: {
            rule: 'repeated',
            type: 'InvitedFriend',
            id: 7
          },
          friendCount: {
            type: 'int32',
            id: 8
          },
          buttonType: {
            type: 'string',
            id: 9
          },
          inviteKey: {
            type: 'string',
            id: 10
          }
        },
        nested: {
          InvitedFriend: {
            fields: {
              avatar: {
                type: 'string',
                id: 1
              },
              nickname: {
                type: 'string',
                id: 2
              },
              registerTime: {
                type: 'string',
                id: 3
              }
            }
          }
        }
      },
      TSAppraisalEventReceiveRequest: {
        fields: {
          inviteKey: {
            type: 'string',
            id: 1
          }
        }
      },
      TSAppraisalEventReceiveResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAppraisalEventPosterRequest: {
        fields: {
          page: {
            type: 'string',
            id: 1
          }
        }
      },
      TSAppraisalEventPosterResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          ownerAvatar: {
            type: 'string',
            id: 3
          },
          shareText: {
            type: 'string',
            id: 4
          },
          appletCode: {
            type: 'bytes',
            id: 5
          },
          nickname: {
            type: 'string',
            id: 6
          }
        }
      },
      TSAppraisalCouponOperateRecordListRequest: {
        fields: {
          pageSize: {
            type: 'int32',
            id: 1
          },
          pageNum: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSAppraisalCouponOperateRecordListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          recordList: {
            rule: 'repeated',
            type: 'CouponOperateRecord',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        },
        nested: {
          CouponOperateRecord: {
            fields: {
              content: {
                type: 'string',
                id: 1
              },
              operateTime: {
                type: 'string',
                id: 2
              },
              couponNo: {
                type: 'string',
                id: 3
              },
              oaid: {
                type: 'string',
                id: 4
              },
              friendNickname: {
                type: 'string',
                id: 5
              },
              consumeCount: {
                type: 'string',
                id: 6
              },
              canJump: {
                type: 'bool',
                id: 7
              }
            }
          }
        }
      },
      TSDoubleSeventhEventPageRequest: {
        fields: {}
      },
      TSDoubleSeventhEventPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          joinCount: {
            type: 'int32',
            id: 3
          },
          scoreboard: {
            rule: 'repeated',
            type: 'Score',
            id: 4
          },
          loggedIn: {
            type: 'bool',
            id: 5
          },
          myScore: {
            type: 'int32',
            id: 6
          },
          inviteKey: {
            type: 'string',
            id: 7
          },
          myRank: {
            type: 'string',
            id: 8
          },
          eventOn: {
            type: 'bool',
            id: 9
          }
        },
        nested: {
          Score: {
            fields: {
              avatar: {
                type: 'string',
                id: 1
              },
              nickname: {
                type: 'string',
                id: 2
              },
              score: {
                type: 'int32',
                id: 3
              },
              rank: {
                type: 'int32',
                id: 4
              }
            }
          }
        }
      },
      TSDoubleSeventhScorePageRequest: {
        fields: {
          pageSize: {
            type: 'int32',
            id: 1
          },
          pageNum: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSDoubleSeventhScorePageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          score: {
            type: 'int32',
            id: 3
          },
          inviteCount: {
            type: 'int32',
            id: 4
          },
          scoreRecords: {
            rule: 'repeated',
            type: 'ScoreRecord',
            id: 5
          },
          isEnd: {
            type: 'bool',
            id: 6
          },
          eventOn: {
            type: 'bool',
            id: 7
          }
        },
        nested: {
          ScoreRecord: {
            fields: {
              avatar: {
                type: 'string',
                id: 1
              },
              nickname: {
                type: 'string',
                id: 2
              },
              changeTime: {
                type: 'string',
                id: 3
              },
              changeScore: {
                type: 'int32',
                id: 4
              },
              operateType: {
                type: 'string',
                id: 5
              }
            }
          }
        }
      },
      TSDoubleSeventhPrizePoolRequest: {
        fields: {}
      },
      TSDoubleSeventhPrizePoolResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          spendScore: {
            type: 'int32',
            id: 3
          },
          prizePool: {
            rule: 'repeated',
            type: 'Prize',
            id: 7
          }
        },
        nested: {
          Prize: {
            fields: {
              name: {
                type: 'string',
                id: 1
              },
              image: {
                type: 'string',
                id: 2
              },
              amount: {
                type: 'int32',
                id: 3
              },
              order: {
                type: 'int32',
                id: 4
              }
            }
          }
        }
      },
      TSDoubleSeventhLotteryRequest: {
        fields: {}
      },
      TSDoubleSeventhLotteryPoolResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          isWin: {
            type: 'bool',
            id: 3
          },
          score: {
            type: 'int32',
            id: 4
          },
          prizeName: {
            type: 'string',
            id: 5
          },
          prizeImage: {
            type: 'string',
            id: 6
          },
          order: {
            type: 'int32',
            id: 7
          }
        }
      },
      TSDoubleSeventhBroadcastRequest: {
        fields: {}
      },
      TSDoubleSeventhBroadcastResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          broadcastList: {
            rule: 'repeated',
            type: 'string',
            id: 3
          }
        }
      },
      TSGiftGenAppraisalCouponOrderRequest: {
        fields: {}
      },
      TSGiftGenAppraisalCouponOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderNo: {
            type: 'string',
            id: 3
          }
        }
      },
      TSOldForNewOnRequest: {
        fields: {}
      },
      TSOldForNewOnResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          isOn: {
            type: 'bool',
            id: 3
          },
          link: {
            type: 'string',
            id: 4
          }
        }
      },
      TSOldForNewClickRequest: {
        fields: {}
      },
      TSOldForNewClickResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSOldForNewH5ClickRequest: {
        fields: {
          phoneNum: {
            type: 'string',
            id: 1
          },
          wechat: {
            type: 'string',
            id: 2
          },
          name: {
            type: 'string',
            id: 3
          },
          contactTime: {
            type: 'string',
            id: 4
          },
          recycleType: {
            type: 'string',
            id: 5
          },
          contactTimeEnum: {
            type: 'ContactTime',
            id: 6
          }
        }
      },
      TSOldForNewH5ClickResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      ConsignOrderStateEnum: {
        values: {
          COS_Default: 0,
          COS_ToBeDelivered: 1,
          COS_HadDelivered: 2,
          COS_Check: 3,
          COS_ConfirmPrice: 4,
          COS_Consigning: 5,
          COS_SuccessfulTrade: 6,
          COS_FailedTrade: 7
        }
      },
      ConsignOrderListStateEnum: {
        values: {
          COLS_Default: 0,
          COLS_ToBeDeliver: 1,
          COLS_DeliverToPlatform: 2,
          COLS_ToCheck: 3,
          COLS_Checking: 4,
          COLS_CheckNo: 5,
          COLS_ToEvaluatePrice: 6,
          COLS_ToConfirmPrice: 7,
          COLS_ConfirmNo: 8,
          COLS_ConfirmOutTime: 9,
          COLS_Consigning: 10,
          COLS_SuccessfulTrade: 11,
          COLS_CancelTrade: 12,
          COLS_TradeOutTime: 13,
          COLS_HasSendBack: 14,
          COLS_ConsignToRecycle: 15,
          COLS_CancelDeliver: 16,
          COLS_ToEvaluate: 17,
          COLS_DeliverOutTime: 18
        }
      },
      ConsignOrderButtonEnum: {
        values: {
          COB_Default: 0,
          COB_Deliver: 1,
          COB_Detail: 2,
          COB_AcceptPrice: 3,
          COB_RefusePrice: 4,
          COB_CancelDeliver: 5,
          COB_Edit: 6
        }
      },
      ConsignOrderButton: {
        fields: {
          buttonEnum: {
            type: 'ConsignOrderButtonEnum',
            id: 1
          },
          buttonTitle: {
            type: 'string',
            id: 2
          }
        }
      },
      ConsignOrderInfo: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          consignOrderListStateEnum: {
            type: 'ConsignOrderListStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          productTitle: {
            type: 'string',
            id: 4
          },
          image: {
            type: 'string',
            id: 5
          },
          price: {
            type: 'uint32',
            id: 6
          },
          color: {
            type: 'string',
            id: 7
          },
          size: {
            type: 'string',
            id: 8
          },
          measurement: {
            type: 'string',
            id: 9
          },
          news: {
            type: 'string',
            id: 10
          },
          orderButton: {
            rule: 'repeated',
            type: 'ConsignOrderButton',
            id: 11
          },
          confirmTimeLeft: {
            type: 'uint32',
            id: 12
          },
          finalPrice: {
            type: 'uint32',
            id: 13
          },
          finalNews: {
            type: 'string',
            id: 14
          },
          consignTimeLeft: {
            type: 'uint32',
            id: 15
          },
          advancePayment: {
            type: 'uint32',
            id: 16
          },
          balancePayment: {
            type: 'uint32',
            id: 17
          },
          deliverTimeLeft: {
            type: 'uint32',
            id: 18
          },
          imgList: {
            rule: 'repeated',
            type: 'string',
            id: 19
          }
        }
      },
      ConsignOrderDetailInfo: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          consignOrderListStateEnum: {
            type: 'ConsignOrderListStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          stateIntroduction: {
            type: 'string',
            id: 4
          },
          creatTime: {
            type: 'string',
            id: 5
          },
          productTitle: {
            type: 'string',
            id: 6
          },
          image: {
            type: 'string',
            id: 7
          },
          price: {
            type: 'uint32',
            id: 8
          },
          color: {
            type: 'string',
            id: 9
          },
          size: {
            type: 'string',
            id: 10
          },
          measurement: {
            type: 'string',
            id: 11
          },
          news: {
            type: 'string',
            id: 12
          },
          returnAddress: {
            type: 'UserAddress',
            id: 13
          },
          record: {
            type: 'ExpressRecord',
            id: 14
          },
          expressNo: {
            type: 'string',
            id: 15
          },
          finalPrice: {
            type: 'uint32',
            id: 16
          },
          finalNews: {
            type: 'string',
            id: 17
          },
          confirmTimeLeft: {
            type: 'uint32',
            id: 18
          },
          consignTimeLeft: {
            type: 'uint32',
            id: 19
          },
          orderButton: {
            rule: 'repeated',
            type: 'ConsignOrderButton',
            id: 20
          },
          advancePayment: {
            type: 'uint32',
            id: 21
          },
          balancePayment: {
            type: 'uint32',
            id: 22
          },
          deliverTimeLeft: {
            type: 'uint32',
            id: 23
          },
          imgList: {
            rule: 'repeated',
            type: 'string',
            id: 24
          }
        }
      },
      TSConsignAppraisalPointsRequest: {
        fields: {
          categoryEnum: {
            type: 'CategoryEnum',
            id: 1
          },
          categoryID: {
            type: 'uint32',
            id: 2
          }
        }
      },
      TSConsignAppraisalPointsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          pointInfos: {
            rule: 'repeated',
            type: 'AIServicePointInfo',
            id: 3
          },
          buttonText: {
            type: 'string',
            id: 4
          }
        }
      },
      TSConsignAppraisalResultRequest: {
        fields: {
          saidList: {
            rule: 'repeated',
            type: 'string',
            id: 1
          },
          exteriorUrl: {
            type: 'string',
            id: 2
          },
          newOldID: {
            type: 'uint32',
            id: 3
          },
          kindID: {
            type: 'uint32',
            id: 4
          },
          brandID: {
            type: 'uint32',
            id: 5
          },
          skc: {
            type: 'string',
            id: 6
          },
          price: {
            type: 'uint32',
            id: 7
          }
        }
      },
      TSConsignAppraisalResultResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          genuine: {
            type: 'bool',
            id: 3
          },
          orderNo: {
            type: 'string',
            id: 4
          }
        }
      },
      TSConsignGenOrderRequest: {
        fields: {
          newOldID: {
            type: 'uint32',
            id: 1,
            options: {
              deprecated: true
            }
          },
          kindID: {
            type: 'uint32',
            id: 2,
            options: {
              deprecated: true
            }
          },
          skc: {
            type: 'string',
            id: 3,
            options: {
              deprecated: true
            }
          },
          sku: {
            type: 'string',
            id: 4
          },
          imgList: {
            rule: 'repeated',
            type: 'string',
            id: 5
          }
        }
      },
      TSConsignGenOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderNo: {
            type: 'string',
            id: 3
          }
        }
      },
      TSConsignOrderListRequest: {
        fields: {
          pageNum: {
            type: 'uint32',
            id: 1
          },
          pageSize: {
            type: 'uint32',
            id: 2
          },
          state: {
            type: 'ConsignOrderStateEnum',
            id: 3
          }
        }
      },
      TSConsignOrderListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderInfos: {
            rule: 'repeated',
            type: 'ConsignOrderInfo',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSConsignOrderDetailInfoRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          }
        }
      },
      TSConsignOrderDetailInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderDetailInfo: {
            type: 'ConsignOrderDetailInfo',
            id: 3
          }
        }
      },
      TSConsignEditRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          imgList: {
            rule: 'repeated',
            type: 'string',
            id: 2
          }
        }
      },
      TSConsignEditResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSConsignWannaDeliverRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          expressNo: {
            type: 'string',
            id: 2
          },
          addressID: {
            type: 'uint32',
            id: 3
          }
        }
      },
      TSConsignWannaDeliverResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSConsignCancelDeliverRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          }
        }
      },
      TSConsignCancelDeliverResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSConsignAcceptPriceRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          accept: {
            type: 'bool',
            id: 2
          }
        }
      },
      TSConsignAcceptPriceResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSConsignQueryExpressRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          }
        }
      },
      TSConsignQueryExpressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          expressItems: {
            rule: 'repeated',
            type: 'ExpressItem',
            id: 3
          }
        }
      },
      TSConsignConfirmListRequest: {
        fields: {}
      },
      TSConsignConfirmListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          confirmList: {
            rule: 'repeated',
            type: 'ConfirmItem',
            id: 3
          }
        },
        nested: {
          ConfirmItem: {
            fields: {
              seconds: {
                type: 'uint32',
                id: 1
              },
              price: {
                type: 'uint32',
                id: 2
              },
              orderNo: {
                type: 'string',
                id: 3
              },
              image: {
                type: 'string',
                id: 4
              }
            }
          }
        }
      },
      TSExpertAppraisalKindsRequest: {
        fields: {}
      },
      TSExpertAppraisalKindsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          kindInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 3
          }
        }
      },
      TSExpertAppraisalBrandsRequest: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSExpertAppraisalBrandsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          brandInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInitial',
            id: 3
          },
          hotBrands: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 4
          }
        }
      },
      TSExpertAppraisalSeriesRequest: {
        fields: {
          brandID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSExpertAppraisalSeriesResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          seriesInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInitial',
            id: 3
          },
          hotSeries: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 4
          }
        }
      },
      TSExpertPriceDetailRequest: {
        fields: {
          categoryEnum: {
            type: 'CategoryEnum',
            id: 1
          },
          categoryID: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSExpertPriceDetailResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          price: {
            type: 'int32',
            id: 3
          },
          text: {
            type: 'string',
            id: 4
          }
        }
      },
      TSGenExpertAppraisalOrderRequest: {
        fields: {
          image: {
            type: 'string',
            id: 1
          },
          addressID: {
            type: 'int32',
            id: 2
          },
          source: {
            type: 'string',
            id: 3
          },
          recycle: {
            type: 'bool',
            id: 4
          },
          categoryEnum: {
            type: 'CategoryEnum',
            id: 5
          },
          categoryID: {
            type: 'int32',
            id: 6
          }
        }
      },
      TSGenExpertAppraisalOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderNo: {
            type: 'string',
            id: 3
          },
          needPay: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSExpertAppraisalOrderPayRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          openid: {
            type: 'string',
            id: 2
          }
        }
      },
      TSExpertAppraisalOrderPayResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          package: {
            type: 'string',
            id: 3
          },
          nonceStr: {
            type: 'string',
            id: 4
          },
          timestamp: {
            type: 'string',
            id: 5
          },
          paySign: {
            type: 'string',
            id: 6
          },
          signType: {
            type: 'string',
            id: 7
          }
        }
      },
      TSExpertAppraisalOrderUserSentRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          expressNumber: {
            type: 'string',
            id: 2
          }
        }
      },
      TSExpertAppraisalOrderUserSentResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSExpertAppraisalOrderUserListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          state: {
            type: 'ExpertAppraisalOrderStateEnum',
            id: 3
          }
        }
      },
      TSExpertAppraisalOrderUserListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderList: {
            rule: 'repeated',
            type: 'UserExpertAppraisalOrder',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSExpertAppraisalOrderUserCheckProcessRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          }
        }
      },
      TSExpertAppraisalOrderUserCheckProcessResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          flowItems: {
            rule: 'repeated',
            type: 'FlowItem',
            id: 3
          }
        }
      },
      FLowRecord: {
        fields: {
          updateTime: {
            type: 'string',
            id: 1
          },
          content: {
            type: 'string',
            id: 2
          },
          isRecycle: {
            type: 'bool',
            id: 3
          },
          recycleDetail: {
            type: 'RecycleDetail',
            id: 4
          },
          comment: {
            type: 'string',
            id: 5
          }
        }
      },
      RecycleDetail: {
        fields: {
          seconds: {
            type: 'int32',
            id: 1
          },
          price: {
            type: 'int32',
            id: 2
          },
          reportID: {
            type: 'string',
            id: 3
          },
          orderNumber: {
            type: 'string',
            id: 4
          },
          kindName: {
            type: 'string',
            id: 5
          },
          brandName: {
            type: 'string',
            id: 6
          },
          seriesName: {
            type: 'string',
            id: 7
          },
          image: {
            type: 'string',
            id: 8
          }
        }
      },
      FlowItem: {
        fields: {
          itemTitle: {
            type: 'string',
            id: 1
          },
          itemState: {
            type: 'bool',
            id: 2
          },
          hasDetail: {
            type: 'bool',
            id: 3
          },
          expressCompany: {
            type: 'string',
            id: 4
          },
          expressNumber: {
            type: 'string',
            id: 5
          },
          records: {
            rule: 'repeated',
            type: 'FLowRecord',
            id: 6
          },
          flowType: {
            type: 'string',
            id: 7
          },
          itemTitleHide: {
            type: 'bool',
            id: 8
          }
        }
      },
      TSExpertAppraisalReportRequest: {
        fields: {
          reportID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSExpertAppraisalReportResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          report: {
            type: 'ExpertAppraisalReport',
            id: 3
          }
        }
      },
      TSExpertAppraisalRecycleListRequest: {
        fields: {}
      },
      TSExpertAppraisalRecycleListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          recycleList: {
            rule: 'repeated',
            type: 'RecycleDetail',
            id: 3
          }
        }
      },
      TSExpertAppraisalRecycleAcceptRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          isAccept: {
            type: 'bool',
            id: 2
          }
        }
      },
      TSExpertAppraisalRecycleAcceptResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      UserExpertAppraisalOrder: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          image: {
            type: 'string',
            id: 2
          },
          kindName: {
            type: 'string',
            id: 3
          },
          brandName: {
            type: 'string',
            id: 4
          },
          seriesName: {
            type: 'string',
            id: 5
          },
          price: {
            type: 'int32',
            id: 6
          },
          payWay: {
            type: 'string',
            id: 7
          },
          status: {
            type: 'int32',
            id: 8
          },
          statusName: {
            type: 'string',
            id: 9
          },
          createTime: {
            type: 'string',
            id: 10
          },
          result: {
            type: 'string',
            id: 11
          },
          EAReportID: {
            type: 'string',
            id: 12
          }
        }
      },
      ExpertAppraisalReport: {
        fields: {
          ID: {
            type: 'uint32',
            id: 1
          },
          EAReportID: {
            type: 'string',
            id: 2
          },
          image: {
            type: 'string',
            id: 3
          },
          result: {
            type: 'string',
            id: 4
          },
          kindName: {
            type: 'string',
            id: 5
          },
          brandName: {
            type: 'string',
            id: 6
          },
          seriesName: {
            type: 'string',
            id: 7
          },
          productID: {
            type: 'string',
            id: 8
          },
          appraiser: {
            type: 'string',
            id: 9
          },
          genuine: {
            type: 'bool',
            id: 10
          },
          createTime: {
            type: 'string',
            id: 11
          },
          appraiserSign: {
            type: 'string',
            id: 12
          },
          resultText: {
            type: 'string',
            id: 13
          },
          orderNumber: {
            type: 'string',
            id: 14
          }
        }
      },
      TSExpertAppraisalReportTypeRequest: {
        fields: {
          reportID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSExpertAppraisalReportTypeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          reportType: {
            type: 'int32',
            id: 3
          }
        }
      },
      TSLiveInfoListRequest: {
        fields: {
          start: {
            type: 'int32',
            id: 1
          },
          limit: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSLiveInfoListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          liveRoomList: {
            rule: 'repeated',
            type: 'RoomInfo',
            id: 3
          },
          subscribeRoomList: {
            rule: 'repeated',
            type: 'RoomInfo',
            id: 4
          },
          replayRoomList: {
            rule: 'repeated',
            type: 'RoomInfo',
            id: 5
          }
        },
        nested: {
          Goods: {
            fields: {
              coverImage: {
                type: 'string',
                id: 1
              },
              url: {
                type: 'string',
                id: 2
              },
              price: {
                type: 'string',
                id: 3
              },
              name: {
                type: 'string',
                id: 4
              }
            }
          },
          RoomInfo: {
            fields: {
              name: {
                type: 'string',
                id: 1
              },
              roomId: {
                type: 'int32',
                id: 2
              },
              coverImg: {
                type: 'string',
                id: 3
              },
              anchorName: {
                type: 'string',
                id: 4
              },
              goods: {
                rule: 'repeated',
                type: 'Goods',
                id: 5
              },
              liveStatus: {
                type: 'int32',
                id: 6
              },
              startTime: {
                type: 'string',
                id: 7
              },
              endTime: {
                type: 'string',
                id: 8
              },
              productCount: {
                type: 'int32',
                id: 9
              }
            }
          }
        }
      },
      TSDrawLotteryPoolInfoListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          name: {
            type: 'string',
            id: 3
          },
          lotteryStatus: {
            type: 'string',
            id: 4
          },
          status: {
            type: 'string',
            id: 5
          }
        }
      },
      TSDrawLotteryPoolInfoListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          lotteryPoolInfo: {
            rule: 'repeated',
            type: 'LotteryPoolItem',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        }
      },
      TSDrawLotteryInfoRequest: {
        fields: {
          activityName: {
            type: 'string',
            id: 1
          },
          lotteryPic: {
            type: 'string',
            id: 2
          },
          lotteryStartTime: {
            type: 'string',
            id: 3
          },
          lotteryEndTime: {
            type: 'string',
            id: 4
          },
          lotteryNum: {
            type: 'int32',
            id: 5
          },
          lotteryUserStr: {
            type: 'string',
            id: 6
          }
        }
      },
      TSDrawLotteryInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSDrawLotteryPoolInfoRequest: {
        fields: {
          Id: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSDrawLotteryPoolInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          lotteryPoolInfo: {
            type: 'LotteryPoolItem',
            id: 3
          }
        }
      },
      TSDrawLotteryUserInfoRequest: {
        fields: {
          lotteryPoolId: {
            type: 'int32',
            id: 1
          },
          lotteryUserStr: {
            type: 'string',
            id: 2
          }
        }
      },
      TSDrawLotteryUserInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSDrawLotteryUserInfoListRequest: {
        fields: {
          lotteryPoolId: {
            type: 'int32',
            id: 1
          },
          phone: {
            type: 'string',
            id: 2
          },
          pageNum: {
            type: 'int32',
            id: 4
          },
          pageSize: {
            type: 'int32',
            id: 5
          },
          status: {
            type: 'string',
            id: 6
          }
        }
      },
      TSDrawLotteryUserInfoListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          userPoolInfo: {
            rule: 'repeated',
            type: 'UserPoolItem',
            id: 4
          },
          totalCount: {
            type: 'int32',
            id: 5
          }
        }
      },
      TSDrawLotteryRequest: {
        fields: {
          lotteryPoolId: {
            type: 'int32',
            id: 1
          },
          newStatus: {
            type: 'string',
            id: 2
          }
        }
      },
      TSDrawLotteryResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSDrawLotteryUserRequest: {
        fields: {
          lotteryPoolId: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSDrawLotteryUserResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          phone: {
            type: 'string',
            id: 3
          }
        }
      },
      TSDeleteDrawLotteryRequest: {
        fields: {
          lotteryPoolId: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSDeleteDrawLotteryResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSConfirmOrderPageRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          addrId: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSConfirmOrderPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          product: {
            type: 'ConfirmOrderProduct',
            id: 3
          },
          expressFee: {
            type: 'int32',
            id: 4
          },
          totalAmount: {
            type: 'int32',
            id: 5
          },
          isPostage: {
            type: 'bool',
            id: 6
          }
        }
      },
      TSGenProductOrderRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          addressID: {
            type: 'int32',
            id: 2
          },
          source: {
            type: 'string',
            id: 3
          }
        }
      },
      TSGenProductOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderNo: {
            type: 'string',
            id: 3
          }
        }
      },
      TSProductPayOnWechatRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          }
        }
      },
      TSProductPayOnWechatResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          appid: {
            type: 'string',
            id: 3
          },
          partnerid: {
            type: 'string',
            id: 4
          },
          prepayid: {
            type: 'string',
            id: 5
          },
          package: {
            type: 'string',
            id: 6
          },
          nonceStr: {
            type: 'string',
            id: 7
          },
          timestamp: {
            type: 'string',
            id: 8
          },
          sign: {
            type: 'string',
            id: 9
          }
        }
      },
      TSWechatProductPayRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          openid: {
            type: 'string',
            id: 2
          }
        }
      },
      TSWechatProductPayResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          package: {
            type: 'string',
            id: 3
          },
          nonceStr: {
            type: 'string',
            id: 4
          },
          timestamp: {
            type: 'string',
            id: 5
          },
          paySign: {
            type: 'string',
            id: 6
          },
          signType: {
            type: 'string',
            id: 7
          }
        }
      },
      TSProductPayOnAliPayRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          }
        }
      },
      TSProductPayOnAliPayResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          paySign: {
            type: 'string',
            id: 3
          }
        }
      },
      TSByteDancePayRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          orderType: {
            type: 'OrderType',
            id: 2
          }
        }
      },
      TSByteDancePayResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderInfo: {
            type: 'OrderInfo',
            id: 3
          }
        },
        nested: {
          OrderInfo: {
            fields: {
              merchantId: {
                type: 'string',
                id: 1
              },
              appId: {
                type: 'string',
                id: 2
              },
              signType: {
                type: 'string',
                id: 3
              },
              timestamp: {
                type: 'string',
                id: 4
              },
              version: {
                type: 'string',
                id: 5
              },
              tradeType: {
                type: 'string',
                id: 6
              },
              sign: {
                type: 'string',
                id: 7
              },
              productCode: {
                type: 'string',
                id: 8
              },
              paymentType: {
                type: 'string',
                id: 9
              },
              outOrderNo: {
                type: 'string',
                id: 10
              },
              uid: {
                type: 'string',
                id: 11
              },
              totalAmount: {
                type: 'int32',
                id: 12
              },
              currency: {
                type: 'string',
                id: 13
              },
              subject: {
                type: 'string',
                id: 14
              },
              body: {
                type: 'string',
                id: 15
              },
              tradeTime: {
                type: 'string',
                id: 16
              },
              validTime: {
                type: 'string',
                id: 17
              },
              notifyUrl: {
                type: 'string',
                id: 18
              },
              alipayUrl: {
                type: 'string',
                id: 19
              },
              wxUrl: {
                type: 'string',
                id: 20
              },
              wxType: {
                type: 'string',
                id: 21
              },
              riskInfo: {
                type: 'string',
                id: 22
              }
            }
          }
        }
      },
      TSOrderPayStatusRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          orderType: {
            type: 'OrderType',
            id: 2
          }
        }
      },
      TSOrderPayStatusResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          cost: {
            type: 'int32',
            id: 3
          },
          isWaitPay: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSPayOnWebRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          orderType: {
            type: 'OrderType',
            id: 2
          },
          quitUrl: {
            type: 'string',
            id: 3
          },
          payWay: {
            type: 'string',
            id: 4
          }
        }
      },
      TSPayOnWebResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          alipayUrl: {
            type: 'string',
            id: 3
          },
          wxUrl: {
            type: 'string',
            id: 4
          }
        }
      },
      TSPayOnWxBrowserRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          orderType: {
            type: 'OrderType',
            id: 2
          },
          openid: {
            type: 'string',
            id: 3
          }
        }
      },
      TSPayOnWxBrowserResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          package: {
            type: 'string',
            id: 3
          },
          nonceStr: {
            type: 'string',
            id: 4
          },
          timestamp: {
            type: 'string',
            id: 5
          },
          paySign: {
            type: 'string',
            id: 6
          },
          signType: {
            type: 'string',
            id: 7
          },
          appid: {
            type: 'string',
            id: 8
          }
        }
      },
      TSQueryOrderStateV2Request: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          orderType: {
            type: 'OrderType',
            id: 2
          }
        }
      },
      TSQueryOrderStateV2Response: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          success: {
            type: 'bool',
            id: 3
          }
        }
      },
      TSQueryProductPayResultRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          }
        }
      },
      TSQueryProductPayResultResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          state: {
            type: 'BuyerOrderStateEnum',
            id: 3
          },
          listState: {
            type: 'BuyerOrderListStateEnum',
            id: 4
          }
        }
      },
      TSSellerQueryOrderListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          sellerOrderState: {
            type: 'SellerOrderStateEnum',
            id: 3
          }
        }
      },
      TSSellerQueryOrderListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderInfos: {
            rule: 'repeated',
            type: 'SellerBriefOrderInfo',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSSellerQueryOrderDetailInfoRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerQueryOrderDetailInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderDetailInfo: {
            type: 'SellerOrderDetailInfo',
            id: 3
          }
        }
      },
      TSSellerWannaDeliverInfoRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerWannaDeliverInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          addressTitle: {
            type: 'string',
            id: 3
          },
          WarehouseAddress: {
            type: 'UserAddress',
            id: 4
          },
          expressCompany: {
            type: 'string',
            id: 5
          }
        }
      },
      TSSellerWannaDeliverRequest: {
        fields: {
          expressNumber: {
            type: 'string',
            id: 1
          },
          orderID: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSellerWannaDeliverResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSellerNotSellRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerNotSellResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSellerQueryExpressRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerQueryExpressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          expressItems: {
            rule: 'repeated',
            type: 'ExpressItem',
            id: 3
          }
        }
      },
      TSSellerDeleteOrderRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerDeleteOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBuyerQueryOrderListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          buyerOrderState: {
            type: 'BuyerOrderStateEnum',
            id: 3
          }
        }
      },
      TSBuyerQueryOrderListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderInfos: {
            rule: 'repeated',
            type: 'BuyerBriefOrderInfo',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSBuyerQueryOrderDetailInfoRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSBuyerQueryOrderDetailInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderDetailInfo: {
            type: 'BuyerOrderDetailInfo',
            id: 3
          }
        }
      },
      TSBuyerCancelOrderRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSBuyerCancelOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBuyerChangeReceivingAddressRequest: {
        fields: {
          addressID: {
            type: 'int32',
            id: 1
          },
          orderID: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBuyerChangeReceivingAddressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBuyerQueryExpressRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSBuyerQueryExpressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          expressItems: {
            rule: 'repeated',
            type: 'ExpressItem',
            id: 3
          }
        }
      },
      TSBuyerDeleteOrderRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSBuyerDeleteOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBuyerConfirmReceivedRequest: {
        fields: {
          orderID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSBuyerConfirmReceivedResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSTradeOrderListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          orderNo: {
            type: 'string',
            id: 3
          },
          buyerPhone: {
            type: 'string',
            id: 4
          },
          sellerPhone: {
            type: 'string',
            id: 5
          },
          state: {
            type: 'string',
            id: 6
          },
          sellerExpressNo: {
            type: 'string',
            id: 7
          },
          isSeckill: {
            type: 'IsSeckill',
            id: 8
          },
          skc: {
            type: 'string',
            id: 9
          }
        }
      },
      TSTradeOrderListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          itemList: {
            rule: 'repeated',
            type: 'OrderBrief',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        },
        nested: {
          BaoOrderButton: {
            fields: {
              buttonText: {
                type: 'string',
                id: 1
              },
              buttonEnum: {
                type: 'BaoOrderButtonEnum',
                id: 2
              }
            }
          },
          OrderBrief: {
            fields: {
              orderNo: {
                type: 'string',
                id: 1
              },
              buyerPhone: {
                type: 'string',
                id: 2
              },
              buyerNickname: {
                type: 'string',
                id: 3
              },
              pid: {
                type: 'string',
                id: 4
              },
              productName: {
                type: 'string',
                id: 5
              },
              productPrice: {
                type: 'int32',
                id: 6
              },
              actualPrice: {
                type: 'int32',
                id: 7
              },
              state: {
                type: 'string',
                id: 8
              },
              orderTime: {
                type: 'string',
                id: 9
              },
              sellerExpressNo: {
                type: 'string',
                id: 10
              },
              stateText: {
                type: 'string',
                id: 11
              },
              buttonList: {
                rule: 'repeated',
                type: 'BaoOrderButton',
                id: 12
              },
              isSeckill: {
                type: 'bool',
                id: 13
              },
              avatarHDImage: {
                type: 'string',
                id: 14
              },
              newsName: {
                type: 'string',
                id: 15
              },
              appSource: {
                type: 'AppSource',
                id: 16
              },
              orderType: {
                type: 'string',
                id: 17
              }
            }
          }
        }
      },
      TSPublishProductInfoRequest: {
        fields: {}
      },
      TSPublishProductInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          serviceCharge: {
            type: 'string',
            id: 3
          },
          transferFeeRate: {
            type: 'string',
            id: 4
          },
          categoryInfo: {
            rule: 'repeated',
            type: 'CategoryInfo',
            id: 5
          },
          pointInfo: {
            rule: 'repeated',
            type: 'PointInfo',
            id: 6
          },
          userAddress: {
            type: 'UserAddress',
            id: 7
          }
        }
      },
      TSProductImageUploadRequest: {
        fields: {
          imgB64: {
            type: 'string',
            id: 1
          },
          appId: {
            type: 'string',
            id: 2
          }
        }
      },
      TSProductImageUploadResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          imageUrl: {
            type: 'string',
            id: 3
          }
        }
      },
      TSProductKindListRequest: {
        fields: {}
      },
      TSProductKindListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          kindList: {
            rule: 'repeated',
            type: 'KindInfo',
            id: 3
          }
        }
      },
      TSProductBrandRequest: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSProductBrandResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          brandInitial: {
            rule: 'repeated',
            type: 'BrandInitial',
            id: 3
          },
          hotBrandList: {
            rule: 'repeated',
            type: 'HotBrandInfo',
            id: 4
          }
        }
      },
      TSProductNewsRequest: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSProductNewsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          news: {
            rule: 'repeated',
            type: 'NewsInfo',
            id: 3
          }
        }
      },
      TSProductSizeListRequest: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSProductSizeListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          sizeList: {
            rule: 'repeated',
            type: 'SizeInfo',
            id: 3
          }
        }
      },
      TSProductColorListRequest: {
        fields: {}
      },
      TSProductColorListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          colorList: {
            rule: 'repeated',
            type: 'ColorInfo',
            id: 3
          }
        }
      },
      TSProductHolmesRequest: {
        fields: {
          brandID: {
            type: 'int32',
            id: 1
          },
          exteriorUrl: {
            type: 'string',
            id: 2
          }
        }
      },
      TSProductHolmesResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          objects: {
            rule: 'repeated',
            type: 'ClassifiedObject',
            id: 3
          }
        }
      },
      TSProductListRequest: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          },
          brandID: {
            type: 'int32',
            id: 2
          },
          pageSize: {
            type: 'int32',
            id: 3
          },
          pageNum: {
            type: 'int32',
            id: 4
          }
        }
      },
      TSProductListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          objects: {
            rule: 'repeated',
            type: 'ClassifiedObject',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSBaoermosFeedbackRequest: {
        fields: {
          productName: {
            type: 'string',
            id: 1
          },
          productItemID: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBaoermosFeedbackResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSPublishProductRequest: {
        fields: {
          newsName: {
            type: 'string',
            id: 1
          },
          newsID: {
            type: 'int32',
            id: 2
          },
          sendWord: {
            type: 'string',
            id: 3
          },
          sellPrice: {
            type: 'int32',
            id: 4
          },
          returnAddressID: {
            type: 'int32',
            id: 5
          },
          sku: {
            type: 'string',
            id: 6
          },
          productName: {
            type: 'string',
            id: 7
          },
          attribute: {
            type: 'string',
            id: 8
          },
          imageList: {
            rule: 'repeated',
            type: 'ShootImageInfo',
            id: 9
          },
          kindID: {
            type: 'int32',
            id: 10
          },
          brandID: {
            type: 'int32',
            id: 11
          }
        }
      },
      TSPublishProductResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          pid: {
            type: 'string',
            id: 3
          }
        }
      },
      TSProductBindOAIDRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          oaid: {
            type: 'string',
            id: 2
          },
          appraisalType: {
            type: 'AppraisalType',
            id: 3
          }
        }
      },
      TSProductBindOAIDResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSelectedPageRequest: {
        fields: {}
      },
      TSSelectedPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          items: {
            rule: 'repeated',
            type: 'CarouselItem',
            id: 3
          },
          kindID: {
            type: 'int32',
            id: 4
          }
        }
      },
      TSProductDetailPageRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSProductDetailPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          productUserUpload: {
            type: 'ProductUserUpload',
            id: 3
          },
          productBasicInfo: {
            type: 'ProductBasicInfo',
            id: 4
          },
          nickName: {
            type: 'string',
            id: 5
          },
          avatar: {
            type: 'string',
            id: 6
          },
          hasCollected: {
            type: 'bool',
            id: 7
          },
          sellState: {
            type: 'string',
            id: 8
          },
          sellerId: {
            type: 'int32',
            id: 9
          },
          onSaleCount: {
            type: 'int32',
            id: 10
          },
          tradeCount: {
            type: 'int32',
            id: 11
          },
          skcInfo: {
            type: 'SkcInfo',
            id: 13
          },
          productList: {
            rule: 'repeated',
            type: 'RecommendProduct',
            id: 12
          },
          button: {
            type: 'ProductDetailButton',
            id: 15
          },
          subscribed: {
            type: 'SubscribeState',
            id: 16
          },
          seckillCard: {
            type: 'string',
            id: 17
          },
          typeProduct: {
            type: 'ProductOriginalType',
            id: 18
          },
          selfRun: {
            type: 'bool',
            id: 19
          }
        },
        nested: {
          RecommendProduct: {
            fields: {
              pid: {
                type: 'string',
                id: 1
              },
              cover: {
                type: 'string',
                id: 2
              },
              newDegree: {
                type: 'string',
                id: 3
              },
              sellPrice: {
                type: 'int32',
                id: 4
              },
              releasePrice: {
                type: 'int32',
                id: 5
              },
              title: {
                type: 'string',
                id: 6
              },
              relatedOAID: {
                type: 'string',
                id: 7
              },
              isSeckillProduct: {
                type: 'bool',
                id: 8
              },
              seckillPrice: {
                type: 'uint32',
                id: 9
              },
              seckillState: {
                type: 'TimeState',
                id: 10
              },
              seckillEndLeft: {
                type: 'string',
                id: 11
              },
              bargainPrice: {
                type: 'uint32',
                id: 12
              },
              typeProduct: {
                type: 'ProductOriginalType',
                id: 13
              },
              selfRun: {
                type: 'bool',
                id: 14
              }
            }
          }
        }
      },
      TSCollectProductRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          changeMode: {
            type: 'string',
            id: 2
          }
        }
      },
      TSCollectProductResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSCollectProductListRequest: {
        fields: {
          pageSize: {
            type: 'int32',
            id: 1
          },
          pageNum: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSCollectProductListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          selectedProductInfo: {
            rule: 'repeated',
            type: 'SelectedProductInfo',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSProductConfirmOrderPageRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSProductConfirmOrderPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          address: {
            type: 'UserAddress',
            id: 3
          },
          productBasicInfo: {
            type: 'ProductBasicInfo',
            id: 4
          },
          expressFee: {
            type: 'int32',
            id: 5
          }
        }
      },
      TSQueryExpressChargeRequest: {
        fields: {
          province: {
            type: 'string',
            id: 1
          }
        }
      },
      TSQueryExpressChargeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          expressFee: {
            type: 'int32',
            id: 3
          }
        }
      },
      TSSellerQueryProductListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSSellerQueryProductListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          productInfos: {
            rule: 'repeated',
            type: 'SellerBriefProductInfo',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSSellerBidDetailRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerBidDetailResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          productInfo: {
            type: 'SellerProductDetailInfo',
            id: 3
          }
        }
      },
      TSProductOnSalePublishInfoRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSProductOnSalePublishInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          publishInfo: {
            type: 'ProductOnSalePublishInfo',
            id: 3
          }
        }
      },
      TSEditProductOnSaleRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          imageList: {
            rule: 'repeated',
            type: 'ShootImageInfo',
            id: 2
          },
          sku: {
            type: 'string',
            id: 3
          },
          newDegreeID: {
            type: 'int32',
            id: 4
          },
          sendWord: {
            type: 'string',
            id: 5
          },
          sellPrice: {
            type: 'int32',
            id: 6
          },
          backAddressID: {
            type: 'int32',
            id: 7
          }
        }
      },
      TSEditProductOnSaleResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSellerBidInfoRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerBidInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          serviceChargeRate: {
            type: 'string',
            id: 3
          },
          transferFeeRate: {
            type: 'string',
            id: 4
          },
          returnAddress: {
            type: 'UserAddress',
            id: 5
          }
        }
      },
      TSSellerBidRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          returnAddressID: {
            type: 'int32',
            id: 2
          },
          price: {
            type: 'int32',
            id: 3
          }
        }
      },
      TSSellerBidResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSellerTakeProductOffShelvesRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerTakeProductOffShelvesResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSellerUpProductRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerUpProductResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSellerChangeReturnAddressRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          addressID: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSSellerChangeReturnAddressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSellerDeleteProductRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSellerDeleteProductResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSProductNewHolmesRequest: {
        fields: {
          imgB64: {
            type: 'string',
            id: 1
          },
          brandId: {
            type: 'string',
            id: 2
          }
        }
      },
      TSProductNewHolmesResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          objects: {
            type: 'NewClassifiedObject',
            id: 3
          },
          productInfo: {
            rule: 'repeated',
            type: 'ProductPidObject',
            id: 4
          },
          hasMatch: {
            type: 'bool',
            id: 5
          },
          logId: {
            type: 'int32',
            id: 6
          }
        }
      },
      ProductFeedbackQuestionRequest: {
        fields: {
          logId: {
            type: 'int32',
            id: 1
          },
          feedback: {
            type: 'string',
            id: 2
          }
        }
      },
      ProductFeedbackQuestionResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSLimitTimeSeckillRequest: {
        fields: {}
      },
      TSLimitTimeSeckillResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          isSeckillOpen: {
            type: 'bool',
            id: 3
          },
          todaySeckill: {
            type: 'DaySeckill',
            id: 4
          },
          tomorrowSeckill: {
            type: 'DaySeckill',
            id: 5
          }
        },
        nested: {
          DaySeckill: {
            fields: {
              multipleRound: {
                type: 'bool',
                id: 1
              },
              roundList: {
                rule: 'repeated',
                type: 'SeckillSingleRound',
                id: 2
              }
            }
          }
        }
      },
      TSSeckillRoundRequest: {
        fields: {
          roundId: {
            type: 'uint32',
            id: 1
          }
        }
      },
      TSSeckillRoundResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          round: {
            type: 'SeckillSingleRound',
            id: 3
          }
        }
      },
      TSSeckillSubscribeRequest: {
        fields: {
          seckillProductId: {
            type: 'uint32',
            id: 1
          },
          subscribe: {
            type: 'bool',
            id: 2
          },
          code: {
            type: 'string',
            id: 3
          }
        }
      },
      TSSeckillSubscribeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminProductPoolListRequest: {
        fields: {
          pageSize: {
            type: 'uint32',
            id: 1
          },
          pageNum: {
            type: 'uint32',
            id: 2
          },
          poolId: {
            type: 'string',
            id: 3
          },
          poolName: {
            type: 'string',
            id: 4
          },
          state: {
            type: 'EnableState',
            id: 5
          },
          poolType: {
            type: 'string',
            id: 6
          }
        }
      },
      TSAdminProductPoolListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          itemList: {
            rule: 'repeated',
            type: 'PoolListItem',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        },
        nested: {
          PoolListItem: {
            fields: {
              recordId: {
                type: 'uint32',
                id: 1
              },
              poolId: {
                type: 'string',
                id: 2
              },
              poolName: {
                type: 'string',
                id: 3
              },
              totalStock: {
                type: 'uint32',
                id: 4
              },
              sellStock: {
                type: 'uint32',
                id: 5
              },
              state: {
                type: 'bool',
                id: 6
              },
              poolType: {
                type: 'string',
                id: 7
              }
            }
          }
        }
      },
      TSAdminProductPoolEnableRequest: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          },
          enabled: {
            type: 'bool',
            id: 2
          }
        }
      },
      TSAdminProductPoolEnableResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminProductPoolAddRequest: {
        fields: {
          poolName: {
            type: 'string',
            id: 1
          },
          poolType: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminProductPoolAddResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminProductPoolModifyRequest: {
        fields: {
          poolName: {
            type: 'string',
            id: 1
          },
          recordId: {
            type: 'uint32',
            id: 2
          }
        }
      },
      TSAdminProductPoolModifyResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminProductPoolOperationRequest: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          }
        }
      },
      TSAdminProductPoolOperationResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          recordList: {
            rule: 'repeated',
            type: 'OperateRecord',
            id: 3
          },
          totalCount: {
            type: 'uint32',
            id: 4
          }
        },
        nested: {
          OperateRecord: {
            fields: {
              operateTime: {
                type: 'string',
                id: 1
              },
              operator: {
                type: 'string',
                id: 2
              },
              event: {
                type: 'string',
                id: 3
              }
            }
          }
        }
      },
      TSSeckillChannelStateRequest: {
        fields: {}
      },
      TSSeckillChannelStateResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          on: {
            type: 'bool',
            id: 3
          }
        }
      },
      TSAdminSeckillEnableRequest: {
        fields: {
          enable: {
            type: 'bool',
            id: 1
          }
        }
      },
      TSAdminSeckillEnableResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminSeckillActivityListRequest: {
        fields: {
          pageSize: {
            type: 'uint32',
            id: 1
          },
          pageNum: {
            type: 'uint32',
            id: 2
          },
          startTime: {
            type: 'string',
            id: 3
          },
          endTime: {
            type: 'string',
            id: 4
          },
          state: {
            type: 'string',
            id: 5
          },
          on: {
            type: 'EnableState',
            id: 6
          }
        }
      },
      TSAdminSeckillActivityListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          itemList: {
            rule: 'repeated',
            type: 'ListItem',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        },
        nested: {
          ListItem: {
            fields: {
              recordId: {
                type: 'uint32',
                id: 1
              },
              seckillDate: {
                type: 'string',
                id: 2
              },
              startTime: {
                type: 'string',
                id: 3
              },
              endTime: {
                type: 'string',
                id: 4
              },
              totalProduct: {
                type: 'uint32',
                id: 5
              },
              sellProduct: {
                type: 'uint32',
                id: 6
              },
              state: {
                type: 'string',
                id: 7
              },
              enabled: {
                type: 'bool',
                id: 8
              }
            }
          }
        }
      },
      TSAdminSeckillActivityEnableRequest: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          },
          enable: {
            type: 'bool',
            id: 2
          }
        }
      },
      TSAdminSeckillActivityEnableResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminSeckillActivityOperationRequest: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          },
          pageSize: {
            type: 'uint32',
            id: 2
          },
          pageNum: {
            type: 'uint32',
            id: 3
          }
        }
      },
      TSAdminSeckillActivityOperationResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          recordList: {
            rule: 'repeated',
            type: 'OperateRecord',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        },
        nested: {
          OperateRecord: {
            fields: {
              operateTime: {
                type: 'string',
                id: 1
              },
              operator: {
                type: 'string',
                id: 2
              },
              event: {
                type: 'string',
                id: 3
              }
            }
          }
        }
      },
      TSAdminSeckillActivityAddRequest: {
        fields: {
          createDate: {
            type: 'string',
            id: 1
          },
          startTime: {
            type: 'string',
            id: 2
          },
          endTime: {
            type: 'string',
            id: 3
          }
        }
      },
      TSAdminSeckillActivityAddResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminSeckillProductListRequest: {
        fields: {
          seckillId: {
            type: 'uint32',
            id: 1
          },
          productName: {
            type: 'string',
            id: 2
          },
          pid: {
            type: 'string',
            id: 3
          },
          state: {
            type: 'string',
            id: 4
          },
          pageSize: {
            type: 'uint32',
            id: 5
          },
          pageNum: {
            type: 'uint32',
            id: 6
          }
        }
      },
      TSAdminSeckillProductListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          pList: {
            rule: 'repeated',
            type: 'SeckillProduct',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          },
          seckillDate: {
            type: 'string',
            id: 5
          },
          startTime: {
            type: 'string',
            id: 6
          },
          endTime: {
            type: 'string',
            id: 7
          },
          totalProduct: {
            type: 'uint32',
            id: 8
          },
          sellProduct: {
            type: 'uint32',
            id: 9
          }
        },
        nested: {
          SeckillProduct: {
            fields: {
              recordId: {
                type: 'uint32',
                id: 1
              },
              pid: {
                type: 'string',
                id: 2
              },
              productName: {
                type: 'string',
                id: 3
              },
              cover: {
                type: 'string',
                id: 4
              },
              size: {
                type: 'string',
                id: 5
              },
              newDegree: {
                type: 'string',
                id: 6
              },
              sellPrice: {
                type: 'uint32',
                id: 7
              },
              seckillPrice: {
                type: 'uint32',
                id: 8
              },
              state: {
                type: 'string',
                id: 9
              },
              sequence: {
                type: 'int32',
                id: 10
              }
            }
          }
        }
      },
      TSAdminSeckillProductAddRequest: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          },
          pid: {
            type: 'string',
            id: 2
          },
          sequence: {
            type: 'int32',
            id: 3
          },
          seckillPrice: {
            type: 'uint32',
            id: 4
          }
        }
      },
      TSAdminSeckillProductAddResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminSeckillProductModifyRequest: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          },
          sequence: {
            type: 'int32',
            id: 2
          },
          seckillPrice: {
            type: 'uint32',
            id: 3
          }
        }
      },
      TSAdminSeckillProductModifyResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAdminSeckillProductDelRequest: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          }
        }
      },
      TSAdminSeckillProductDelResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBrandVenueHotRequest: {
        fields: {}
      },
      TSBrandVenueHotResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          brandInfoList: {
            rule: 'repeated',
            type: 'BrandInfoItem',
            id: 3
          }
        },
        nested: {
          BrandInfoItem: {
            fields: {
              brandID: {
                type: 'int32',
                id: 1
              },
              coverImage: {
                type: 'string',
                id: 2
              },
              logoImage: {
                type: 'string',
                id: 3
              },
              name: {
                type: 'string',
                id: 4
              },
              productList: {
                rule: 'repeated',
                type: 'string',
                id: 5
              },
              kindID: {
                type: 'int32',
                id: 6
              }
            }
          }
        }
      },
      TSBrandVenueBrandPagePageRequest: {
        fields: {
          brandID: {
            type: 'int32',
            id: 1
          },
          kindID: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSBrandVenueBrandPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          brandID: {
            type: 'int32',
            id: 3
          },
          coverImage: {
            type: 'string',
            id: 4
          },
          logoImage: {
            type: 'string',
            id: 5
          },
          enName: {
            type: 'string',
            id: 6
          },
          introduction: {
            type: 'string',
            id: 7
          },
          kindID: {
            type: 'int32',
            id: 8
          },
          cnName: {
            type: 'string',
            id: 9
          },
          onSaleCount: {
            type: 'uint32',
            id: 10
          },
          liked: {
            type: 'bool',
            id: 11
          }
        }
      },
      TSLikeBrandRequest: {
        fields: {
          brandID: {
            type: 'int32',
            id: 1
          },
          like: {
            type: 'bool',
            id: 2
          },
          kindID: {
            type: 'int32',
            id: 3
          }
        }
      },
      TSLikeBrandResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSLikedBrandListRequest: {
        fields: {
          pageSize: {
            type: 'int32',
            id: 1
          },
          pageNum: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSLikedBrandListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          likedBrandList: {
            rule: 'repeated',
            type: 'LikedBrandItem',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        },
        nested: {
          LikedBrandItem: {
            fields: {
              brandID: {
                type: 'int32',
                id: 1
              },
              enName: {
                type: 'string',
                id: 2
              },
              onSaleCount: {
                type: 'uint32',
                id: 3
              },
              newCount: {
                type: 'uint32',
                id: 4
              },
              kindID: {
                type: 'int32',
                id: 5
              },
              logoImage: {
                type: 'string',
                id: 6
              },
              cnName: {
                type: 'string',
                id: 7
              }
            }
          }
        }
      },
      TSMarketEncyclopediaRequest: {
        fields: {
          skc: {
            type: 'string',
            id: 1
          },
          kindID: {
            type: 'int32',
            id: 2
          },
          brandID: {
            type: 'int32',
            id: 3
          }
        }
      },
      TSMarketEncyclopediaResponse: {
        fields: {
          errorCode: {
            type: 'uint32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          holmesResult: {
            rule: 'repeated',
            type: 'HolmesResult',
            id: 3
          }
        }
      },
      TSMarketNewEncyclopediaRequest: {
        fields: {
          sku: {
            type: 'string',
            id: 1
          },
          kindID: {
            type: 'int32',
            id: 2
          },
          brandID: {
            type: 'int32',
            id: 3
          }
        }
      },
      TSMarketNewEncyclopediaResponse: {
        fields: {
          errorCode: {
            type: 'uint32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          holmesResult: {
            rule: 'repeated',
            type: 'HolmesResult',
            id: 3
          }
        }
      },
      TSAdminSecKillAndBargainLimitRequest: {
        fields: {}
      },
      TSAdminSecKillAndBargainLimitResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          BargainInfo: {
            rule: 'repeated',
            type: 'BargainBasicItem',
            id: 3
          },
          SecKillInfo: {
            rule: 'repeated',
            type: 'BargainBasicItem',
            id: 4
          },
          isActOpen: {
            type: 'IsActEnum',
            id: 5
          },
          endTime: {
            type: 'string',
            id: 6
          },
          countDown: {
            type: 'int32',
            id: 7
          }
        }
      },
      TSBargainProductLimitRequest: {
        fields: {}
      },
      TSBargainProductLimitResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          BargainProduct: {
            rule: 'repeated',
            type: 'BargainBasicItem',
            id: 3
          }
        }
      },
      TSMyBargainProductLimitRequest: {
        fields: {}
      },
      TSMyBargainProductLimitResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          MyBargainProduct: {
            rule: 'repeated',
            type: 'BargainBasicItem',
            id: 6
          }
        }
      },
      TSBargainDetailRequest: {
        fields: {
          activityId: {
            type: 'uint32',
            id: 1
          },
          uid: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSBargainDetailResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          BargainDetailInfo: {
            type: 'BargainDetailItem',
            id: 3
          },
          helpBargain: {
            rule: 'repeated',
            type: 'HelpBargainItem',
            id: 4
          },
          MyBargainOrder: {
            rule: 'repeated',
            type: 'BargainBasicItem',
            id: 5
          },
          sharingCard: {
            type: 'string',
            id: 7
          },
          isFrame: {
            type: 'bool',
            id: 8
          }
        }
      },
      TSBargainRequest: {
        fields: {
          activityId: {
            type: 'uint32',
            id: 1
          },
          bargainMethods: {
            type: 'BargainOpMethods',
            id: 2
          },
          uid: {
            type: 'uint32',
            id: 3
          }
        }
      },
      TSBargainResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          baoPrice: {
            type: 'int32',
            id: 3
          },
          distancePrice: {
            type: 'int32',
            id: 4
          },
          reductionPrice: {
            type: 'int32',
            id: 5
          }
        }
      },
      TSBargainPromptMessageRequest: {
        fields: {}
      },
      TSBargainPromptMessageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          promptMessage: {
            type: 'PromptMessageItem',
            id: 3
          },
          message: {
            type: 'BargainMessage',
            id: 4
          }
        }
      },
      TSBargainCardShareRequest: {
        fields: {
          activityId: {
            type: 'uint32',
            id: 1
          },
          bargainOpShare: {
            type: 'BargainOpShare',
            id: 2
          }
        }
      },
      TSBargainCardShareResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSLikeBargainRequest: {
        fields: {
          like: {
            type: 'bool',
            id: 1
          },
          bargainInfoId: {
            type: 'uint32',
            id: 2
          }
        }
      },
      TSLikeBargainResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSErrorResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSPublicWXAppletCodeRequest: {
        fields: {
          scene: {
            type: 'string',
            id: 1
          },
          page: {
            type: 'string',
            id: 2
          }
        }
      },
      TSPublicWXAppletCodeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          appletCode: {
            type: 'bytes',
            id: 3
          }
        }
      },
      TSPublicWechatProductPayRequest: {
        fields: {
          orderNumber: {
            type: 'string',
            id: 1
          },
          openid: {
            type: 'string',
            id: 2
          },
          orderType: {
            type: 'string',
            id: 3
          }
        }
      },
      TSPublicWechatProductPayResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          package: {
            type: 'string',
            id: 3
          },
          nonceStr: {
            type: 'string',
            id: 4
          },
          timestamp: {
            type: 'string',
            id: 5
          },
          paySign: {
            type: 'string',
            id: 6
          },
          signType: {
            type: 'string',
            id: 7
          }
        }
      },
      TSFullscreenPosterRequest: {
        fields: {
          pageID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSFullscreenPosterResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          show: {
            type: 'bool',
            id: 3
          },
          imageUrl: {
            type: 'string',
            id: 4
          },
          path: {
            type: 'string',
            id: 5
          },
          type: {
            type: 'int32',
            id: 6
          }
        }
      },
      TSCenterAddressRequest: {
        fields: {}
      },
      TSCenterAddressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          addressTitle: {
            type: 'string',
            id: 3
          },
          address: {
            type: 'UserAddress',
            id: 4
          },
          expressCompany: {
            type: 'string',
            id: 5
          }
        }
      },
      TSGetTop20AppraisalReportRequest: {
        fields: {}
      },
      TSGetTop20AppraisalReportResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          reports: {
            rule: 'repeated',
            type: 'BulletinReport',
            id: 3
          }
        }
      },
      TSGetDefaultAddressRequest: {
        fields: {}
      },
      TSGetDefaultAddressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          hasDefaultAddress: {
            type: 'bool',
            id: 3
          },
          address: {
            type: 'UserAddress',
            id: 4
          }
        }
      },
      TSPublicKindsRequest: {
        fields: {
          serviceType: {
            type: 'ServiceTypeEnum',
            id: 1
          }
        }
      },
      TSPublicKindsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          kindInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 3
          }
        }
      },
      TSPublicBrandsRequest: {
        fields: {
          serviceType: {
            type: 'ServiceTypeEnum',
            id: 1
          },
          kindID: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSPublicBrandsResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          brandInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInitial',
            id: 3
          },
          hotBrands: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 4
          }
        }
      },
      TSPublicSeriesRequest: {
        fields: {
          serviceType: {
            type: 'ServiceTypeEnum',
            id: 1
          },
          brandID: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSPublicSeriesResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          seriesInfos: {
            rule: 'repeated',
            type: 'AIServiceCategoryInitial',
            id: 3
          },
          hotSeries: {
            rule: 'repeated',
            type: 'AIServiceCategoryInfo',
            id: 4
          }
        }
      },
      TSPublicAreaRequest: {
        fields: {
          code: {
            type: 'string',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          level: {
            type: 'int32',
            id: 3
          },
          pcode: {
            type: 'string',
            id: 4
          }
        }
      },
      TSPublicAreaResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          areaList: {
            rule: 'repeated',
            type: 'AreaInfo',
            id: 3
          }
        },
        nested: {
          AreaInfo: {
            fields: {
              code: {
                type: 'string',
                id: 1
              },
              name: {
                type: 'string',
                id: 2
              },
              level: {
                type: 'int32',
                id: 3
              },
              pcode: {
                type: 'string',
                id: 4
              }
            }
          }
        }
      },
      TSPublicEvaluatePriceRequest: {
        fields: {
          newOldID: {
            type: 'uint32',
            id: 1
          },
          kindID: {
            type: 'uint32',
            id: 2,
            options: {
              deprecated: true
            }
          },
          skc: {
            type: 'string',
            id: 3,
            options: {
              deprecated: true
            }
          },
          serviceType: {
            type: 'ServiceTypeEnum',
            id: 4
          },
          sku: {
            type: 'string',
            id: 5
          }
        }
      },
      TSPublicEvaluatePriceResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          price: {
            type: 'uint32',
            id: 3
          },
          floorPrice: {
            type: 'uint32',
            id: 4
          },
          canEvaluate: {
            type: 'bool',
            id: 5
          },
          advancePayment: {
            type: 'uint32',
            id: 6
          },
          balancePayment: {
            type: 'uint32',
            id: 7
          }
        }
      },
      TSPublicBroadcastRequest: {
        fields: {
          page: {
            type: 'PageEnum',
            id: 1
          }
        }
      },
      TSPublicBroadcastResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          broadcastList: {
            rule: 'repeated',
            type: 'BroadcastItem',
            id: 3
          }
        }
      },
      TSXianYuDataRequest: {
        fields: {
          title: {
            type: 'string',
            id: 1
          },
          startTime: {
            type: 'string',
            id: 2
          },
          endTime: {
            type: 'string',
            id: 3
          },
          pageNum: {
            type: 'uint32',
            id: 4
          },
          pageSize: {
            type: 'uint32',
            id: 5
          },
          mesoid: {
            type: 'YesOrNoChoice',
            id: 6
          },
          rare: {
            type: 'YesOrNoChoice',
            id: 7
          },
          classic: {
            type: 'YesOrNoChoice',
            id: 8
          },
          extra: {
            type: 'YesOrNoChoice',
            id: 9
          }
        }
      },
      TSXianYuDataResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          dataList: {
            rule: 'repeated',
            type: 'XianYuData',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        },
        nested: {
          XianYuData: {
            fields: {
              title: {
                type: 'string',
                id: 1
              },
              sellerName: {
                type: 'string',
                id: 2
              },
              publishPlace: {
                type: 'string',
                id: 3
              },
              price: {
                type: 'string',
                id: 4
              },
              wantNum: {
                type: 'string',
                id: 5
              },
              readNum: {
                type: 'string',
                id: 6
              },
              number: {
                type: 'string',
                id: 7
              },
              publishTime: {
                type: 'string',
                id: 8
              },
              image: {
                type: 'string',
                id: 9
              },
              instoreTime: {
                type: 'string',
                id: 10
              },
              recordId: {
                type: 'uint32',
                id: 11
              },
              mesoid: {
                type: 'bool',
                id: 12
              },
              rare: {
                type: 'bool',
                id: 13
              },
              classic: {
                type: 'bool',
                id: 14
              },
              extra: {
                type: 'bool',
                id: 15
              }
            }
          }
        }
      },
      TSXianYuDataModifyRequest: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          },
          mesoid: {
            type: 'bool',
            id: 2
          },
          rare: {
            type: 'bool',
            id: 3
          },
          classic: {
            type: 'bool',
            id: 4
          },
          extra: {
            type: 'bool',
            id: 5
          }
        }
      },
      TSXianYuDataModifyResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSResourceBannerRequest: {
        fields: {
          pageId: {
            type: 'string',
            id: 1
          }
        }
      },
      TSResourceBannerResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          bannerList: {
            rule: 'repeated',
            type: 'Banner',
            id: 3
          }
        },
        nested: {
          Banner: {
            fields: {
              imageUrl: {
                type: 'string',
                id: 1
              },
              jumpType: {
                type: 'string',
                id: 2
              },
              jumpLink: {
                type: 'string',
                id: 3
              }
            }
          }
        }
      },
      TSUploadEnterpriseWechatRequest: {
        fields: {
          imageB64: {
            type: 'string',
            id: 1
          }
        }
      },
      TSUploadEnterpriseWechatResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          imageUrl: {
            type: 'string',
            id: 3
          }
        }
      },
      TSGetEnterpriseWechatRequest: {
        fields: {}
      },
      TSGetEnterpriseWechatResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          imageUrl: {
            type: 'string',
            id: 3
          }
        }
      },
      RecycleOrderStateEnum: {
        values: {
          ROS_Default: 0,
          ROS_ToBeDelivered: 1,
          ROS_HadDelivered: 2,
          ROS_Check: 3,
          ROS_ConfirmPrice: 4,
          ROS_SuccessfulTrade: 5,
          ROS_FailedTrade: 6
        }
      },
      RecycleOrderListStateEnum: {
        values: {
          ROLS_Default: 0,
          ROLS_ToBeDeliver: 1,
          ROLS_DeliverToPlatform: 2,
          ROLS_ToCheck: 3,
          ROLS_Checking: 4,
          ROLS_CheckNo: 5,
          ROLS_ToEvaluatePrice: 6,
          ROLS_ToConfirmPrice: 7,
          ROLS_ConfirmNo: 8,
          ROLS_ConfirmOutTime: 9,
          ROLS_AcceptRecycle: 11,
          ROLS_RefuseRecycle: 12,
          ROLS_HasSendBack: 13,
          ROLS_RecycleToConsign: 14,
          ROLS_CancelDeliver: 15,
          ROLS_ToEvaluate: 16,
          ROLS_DeliverOutTime: 17
        }
      },
      RecycleOrderButtonEnum: {
        values: {
          ROB_Default: 0,
          ROB_Deliver: 1,
          ROB_Detail: 2,
          ROB_AcceptPrice: 3,
          ROB_RefusePrice: 4,
          ROB_CancelDeliver: 5,
          ROB_Edit: 6
        }
      },
      RecycleOrderButton: {
        fields: {
          buttonEnum: {
            type: 'RecycleOrderButtonEnum',
            id: 1
          },
          buttonTitle: {
            type: 'string',
            id: 2
          }
        }
      },
      RecycleOrderInfo: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          recycleOrderListStateEnum: {
            type: 'RecycleOrderListStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          productTitle: {
            type: 'string',
            id: 4
          },
          image: {
            type: 'string',
            id: 5
          },
          price: {
            type: 'uint32',
            id: 6
          },
          color: {
            type: 'string',
            id: 7
          },
          size: {
            type: 'string',
            id: 8
          },
          measurement: {
            type: 'string',
            id: 9
          },
          news: {
            type: 'string',
            id: 10
          },
          orderButton: {
            rule: 'repeated',
            type: 'RecycleOrderButton',
            id: 11
          },
          confirmTimeLeft: {
            type: 'uint32',
            id: 12
          },
          finalPrice: {
            type: 'uint32',
            id: 13
          },
          finalNews: {
            type: 'string',
            id: 14
          },
          advancePayment: {
            type: 'uint32',
            id: 15
          },
          balancePayment: {
            type: 'uint32',
            id: 16
          },
          deliverTimeLeft: {
            type: 'uint32',
            id: 17
          },
          imgList: {
            rule: 'repeated',
            type: 'string',
            id: 18
          }
        }
      },
      RecycleOrderDetailInfo: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          recycleOrderListStateEnum: {
            type: 'RecycleOrderListStateEnum',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          stateIntroduction: {
            type: 'string',
            id: 4
          },
          creatTime: {
            type: 'string',
            id: 5
          },
          productTitle: {
            type: 'string',
            id: 6
          },
          image: {
            type: 'string',
            id: 7
          },
          price: {
            type: 'uint32',
            id: 8
          },
          color: {
            type: 'string',
            id: 9
          },
          size: {
            type: 'string',
            id: 10
          },
          measurement: {
            type: 'string',
            id: 11
          },
          news: {
            type: 'string',
            id: 12
          },
          returnAddress: {
            type: 'UserAddress',
            id: 13
          },
          record: {
            type: 'ExpressRecord',
            id: 14
          },
          expressNo: {
            type: 'string',
            id: 15
          },
          finalPrice: {
            type: 'uint32',
            id: 16
          },
          finalNews: {
            type: 'string',
            id: 17
          },
          confirmTimeLeft: {
            type: 'uint32',
            id: 18
          },
          orderButton: {
            rule: 'repeated',
            type: 'RecycleOrderButton',
            id: 19
          },
          advancePayment: {
            type: 'uint32',
            id: 20
          },
          balancePayment: {
            type: 'uint32',
            id: 21
          },
          deliverTimeLeft: {
            type: 'uint32',
            id: 22
          },
          imgList: {
            rule: 'repeated',
            type: 'string',
            id: 23
          }
        }
      },
      TSRecycleGenOrderRequest: {
        fields: {
          newOldID: {
            type: 'uint32',
            id: 1,
            options: {
              deprecated: true
            }
          },
          kindID: {
            type: 'uint32',
            id: 2,
            options: {
              deprecated: true
            }
          },
          skc: {
            type: 'string',
            id: 3,
            options: {
              deprecated: true
            }
          },
          sku: {
            type: 'string',
            id: 4
          },
          imgList: {
            rule: 'repeated',
            type: 'string',
            id: 5
          }
        }
      },
      TSRecycleGenOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderNo: {
            type: 'string',
            id: 3
          }
        }
      },
      TSRecycleOrderListRequest: {
        fields: {
          pageNum: {
            type: 'uint32',
            id: 1
          },
          pageSize: {
            type: 'uint32',
            id: 2
          },
          state: {
            type: 'RecycleOrderStateEnum',
            id: 3
          }
        }
      },
      TSRecycleOrderListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderInfos: {
            rule: 'repeated',
            type: 'RecycleOrderInfo',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSRecycleOrderDetailInfoRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          }
        }
      },
      TSRecycleOrderDetailInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          orderDetailInfo: {
            type: 'RecycleOrderDetailInfo',
            id: 3
          }
        }
      },
      TSRecycleEditRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          imgList: {
            rule: 'repeated',
            type: 'string',
            id: 2
          }
        }
      },
      TSRecycleEditResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSRecycleWannaDeliverRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          expressNo: {
            type: 'string',
            id: 2
          },
          addressID: {
            type: 'uint32',
            id: 3
          }
        }
      },
      TSRecycleWannaDeliverResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSRecycleCancelDeliverRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          }
        }
      },
      TSRecycleCancelDeliverResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSRecycleAcceptPriceRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          accept: {
            type: 'bool',
            id: 2
          }
        }
      },
      TSRecycleAcceptPriceResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSRecycleQueryExpressRequest: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          }
        }
      },
      TSRecycleQueryExpressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          expressItems: {
            rule: 'repeated',
            type: 'ExpressItem',
            id: 3
          }
        }
      },
      TSRecycleConfirmListRequest: {
        fields: {}
      },
      TSRecycleConfirmListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          confirmList: {
            rule: 'repeated',
            type: 'ConfirmItem',
            id: 3
          }
        },
        nested: {
          ConfirmItem: {
            fields: {
              seconds: {
                type: 'uint32',
                id: 1
              },
              price: {
                type: 'uint32',
                id: 2
              },
              orderNo: {
                type: 'string',
                id: 3
              },
              image: {
                type: 'string',
                id: 4
              }
            }
          }
        }
      },
      TSPublicRecycleRegisterRequest: {
        fields: {
          registerType: {
            type: 'RecycleRegisterType',
            id: 1
          },
          kindID: {
            type: 'int32',
            id: 2
          },
          brandID: {
            type: 'int32',
            id: 3
          },
          psychologyPrice: {
            type: 'uint32',
            id: 4
          },
          productImage: {
            type: 'string',
            id: 5
          },
          contactTime: {
            type: 'ContactTime',
            id: 6
          }
        }
      },
      TSPublicRecycleRegisterResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSHotListRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          hotName: {
            type: 'string',
            id: 3
          },
          state: {
            type: 'int32',
            id: 4
          },
          isDefault: {
            type: 'string',
            id: 5
          },
          type: {
            type: 'string',
            id: 6
          }
        }
      },
      TSHotListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          HotList: {
            rule: 'repeated',
            type: 'HotItem',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        }
      },
      TSHotPostRequest: {
        fields: {
          hotName: {
            type: 'string',
            id: 1
          },
          sequence: {
            type: 'int32',
            id: 2
          },
          startTime: {
            type: 'string',
            id: 3
          },
          endTime: {
            type: 'string',
            id: 4
          },
          isDefault: {
            type: 'string',
            id: 5
          },
          type: {
            type: 'string',
            id: 6
          }
        }
      },
      TSHotPostResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSHotPutRequest: {
        fields: {
          hotName: {
            type: 'string',
            id: 1
          },
          sequence: {
            type: 'int32',
            id: 2
          },
          startTime: {
            type: 'string',
            id: 3
          },
          endTime: {
            type: 'string',
            id: 4
          },
          isDefault: {
            type: 'string',
            id: 5
          },
          hotID: {
            type: 'int32',
            id: 6
          },
          type: {
            type: 'string',
            id: 7
          }
        }
      },
      TSHotPutResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSHotDeleteRequest: {
        fields: {
          hotID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSHotDeleteResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSHotStopRequest: {
        fields: {
          hotID: {
            type: 'int32',
            id: 1
          },
          state: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSHotStopResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSHotGetRequest: {
        fields: {}
      },
      TSHotGetResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          hotWord: {
            type: 'string',
            id: 3
          }
        }
      },
      TSMallSearchRequest: {
        fields: {
          brandStr: {
            type: 'string',
            id: 1
          },
          kindID: {
            type: 'int32',
            id: 2
          },
          sizeStr: {
            type: 'string',
            id: 3
          },
          newsStr: {
            type: 'string',
            id: 4
          },
          actualMinPrice: {
            type: 'int32',
            id: 5
          },
          actualMaxPrice: {
            type: 'int32',
            id: 6
          },
          pageNum: {
            type: 'int32',
            id: 7
          },
          pageSize: {
            type: 'int32',
            id: 8
          },
          searchQuery: {
            type: 'string',
            id: 9
          },
          sort: {
            type: 'string',
            id: 10
          },
          colorStr: {
            type: 'string',
            id: 11
          },
          skc: {
            type: 'string',
            id: 12
          }
        }
      },
      TSMallSearchResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          searchInfo: {
            rule: 'repeated',
            type: 'SearchItem',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          },
          total: {
            type: 'int32',
            id: 5
          }
        }
      },
      TSMallRecommendProductListRequest: {
        fields: {
          productName: {
            type: 'string',
            id: 1
          },
          pid: {
            type: 'string',
            id: 2
          },
          phone: {
            type: 'string',
            id: 3
          },
          state: {
            type: 'string',
            id: 4
          },
          pageSize: {
            type: 'int32',
            id: 5
          },
          pageNum: {
            type: 'int32',
            id: 6
          },
          recordId: {
            type: 'uint32',
            id: 7
          }
        }
      },
      TSMallRecommendProductListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          productItem: {
            rule: 'repeated',
            type: 'RecommendProductItem',
            id: 3
          },
          totalCount: {
            type: 'int32',
            id: 4
          }
        },
        nested: {
          RecommendProductItem: {
            fields: {
              pid: {
                type: 'string',
                id: 1
              },
              productName: {
                type: 'string',
                id: 2
              },
              size: {
                type: 'string',
                id: 3
              },
              newDegree: {
                type: 'string',
                id: 4
              },
              phone: {
                type: 'string',
                id: 5
              },
              state: {
                type: 'string',
                id: 6
              },
              ranking: {
                type: 'int32',
                id: 7
              },
              image: {
                type: 'string',
                id: 8
              }
            }
          }
        }
      },
      TSMallRecommendProductItemDetailRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSMallRecommendProductItemDetailResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          productName: {
            type: 'string',
            id: 3
          },
          size: {
            type: 'string',
            id: 4
          },
          newDegree: {
            type: 'string',
            id: 5
          },
          phone: {
            type: 'string',
            id: 6
          },
          state: {
            type: 'string',
            id: 7
          },
          image: {
            type: 'string',
            id: 8
          },
          price: {
            type: 'uint32',
            id: 9
          },
          sku: {
            type: 'string',
            id: 10
          },
          selfRun: {
            type: 'bool',
            id: 11
          },
          actualPrice: {
            type: 'int32',
            id: 12
          }
        }
      },
      TSMallRecommendProductRegisterRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          ranking: {
            type: 'int32',
            id: 2
          },
          recordId: {
            type: 'uint32',
            id: 3
          }
        }
      },
      TSMallRecommendProductRegisterResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSMallRecommendProductModifyOrderRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          ranking: {
            type: 'int32',
            id: 2
          }
        }
      },
      TSMallRecommendProductModifyOrderResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSMallRecommendProductItemDelRequest: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          }
        }
      },
      TSMallRecommendProductItemDelResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSMallPublishSearchRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          searchQuery: {
            type: 'string',
            id: 3
          },
          kindID: {
            type: 'int32',
            id: 4
          },
          brandID: {
            type: 'int32',
            id: 5
          },
          serviceType: {
            type: 'ServiceTypeEnum',
            id: 6
          }
        }
      },
      TSMallPublishSearchResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          searchMallPublishInfo: {
            rule: 'repeated',
            type: 'SearchMallPublishItem',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSMallSearchDropDownRequest: {
        fields: {
          pageSize: {
            type: 'int32',
            id: 1
          },
          searchQuery: {
            type: 'string',
            id: 2
          }
        }
      },
      TSMallSearchDropDownResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          suggestions: {
            rule: 'repeated',
            type: 'string',
            id: 3
          },
          requestID: {
            type: 'string',
            id: 4
          }
        }
      },
      FeedBackList: {
        fields: {
          userID: {
            type: 'int32',
            id: 1
          },
          userName: {
            type: 'string',
            id: 2
          },
          kindName: {
            type: 'string',
            id: 3
          },
          brandName: {
            type: 'string',
            id: 4
          },
          productName: {
            type: 'string',
            id: 5
          },
          productNum: {
            type: 'int32',
            id: 6
          },
          status: {
            type: 'string',
            id: 7
          }
        }
      },
      StockList: {
        fields: {
          skc: {
            type: 'string',
            id: 1
          },
          productName: {
            type: 'string',
            id: 2
          },
          productUrl: {
            type: 'string',
            id: 3
          },
          colorName: {
            type: 'string',
            id: 4
          },
          productNum: {
            type: 'string',
            id: 5
          },
          kindName: {
            type: 'string',
            id: 6
          },
          brandName: {
            type: 'string',
            id: 7
          },
          status: {
            type: 'string',
            id: 8
          },
          inventoryAvailableForSale: {
            type: 'int32',
            id: 9
          },
          thirdPartyCountForSale: {
            type: 'int32',
            id: 10
          },
          selfRunCountForSale: {
            type: 'int32',
            id: 11
          },
          spu: {
            type: 'string',
            id: 12
          },
          sku: {
            type: 'string',
            id: 13
          }
        }
      },
      StockKindList: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      StockBrandList: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      StockSkuInfo: {
        fields: {
          sku: {
            type: 'string',
            id: 1
          },
          mainPic: {
            type: 'string',
            id: 2
          },
          productCode: {
            type: 'string',
            id: 3
          },
          sizeName: {
            type: 'string',
            id: 4
          },
          measurement: {
            type: 'string',
            id: 5
          },
          status: {
            type: 'string',
            id: 6
          },
          sellPrice: {
            type: 'int32',
            id: 7
          },
          serviceFee: {
            type: 'int32',
            id: 8
          },
          thirdPartyCountForSale: {
            type: 'int32',
            id: 9
          },
          selfRunCountForSale: {
            type: 'int32',
            id: 10
          },
          pid: {
            type: 'string',
            id: 11
          },
          skc: {
            type: 'string',
            id: 12
          }
        }
      },
      StockDetailInfo: {
        fields: {
          productID: {
            type: 'string',
            id: 1
          },
          sizeBriefName: {
            type: 'string',
            id: 2
          },
          sku: {
            type: 'string',
            id: 3
          },
          newsName: {
            type: 'string',
            id: 4
          },
          sellerPhone: {
            type: 'string',
            id: 5
          },
          sellerName: {
            type: 'string',
            id: 6
          },
          sellPrice: {
            type: 'int32',
            id: 7
          },
          serviceFee: {
            type: 'int32',
            id: 8
          },
          transferFee: {
            type: 'int32',
            id: 9
          },
          arrivalPrice: {
            type: 'int32',
            id: 10
          },
          identifyCode: {
            type: 'string',
            id: 11
          },
          state: {
            type: 'string',
            id: 12
          },
          creatTime: {
            type: 'string',
            id: 13
          },
          cover: {
            type: 'string',
            id: 14
          },
          selfRun: {
            type: 'bool',
            id: 15
          }
        }
      },
      StockDetailSize: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      StockDetailColour: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      StockDetailProductHandleRecord: {
        fields: {
          time: {
            type: 'string',
            id: 1
          },
          operator: {
            type: 'string',
            id: 2
          },
          event: {
            type: 'string',
            id: 3
          }
        }
      },
      KindItem: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          },
          kindName: {
            type: 'string',
            id: 2
          },
          kindCoverUrl: {
            type: 'string',
            id: 3
          },
          sequence: {
            type: 'int32',
            id: 4
          },
          state: {
            type: 'int32',
            id: 5
          },
          serviceMall: {
            type: 'string',
            id: 6
          },
          serviceAiAuthenticate: {
            type: 'string',
            id: 7
          },
          serviceAiReadMap: {
            type: 'string',
            id: 8
          },
          serviceAiEvaluate: {
            type: 'string',
            id: 9
          },
          serviceExpertAppraisal: {
            type: 'string',
            id: 10
          },
          serviceRecycle: {
            type: 'string',
            id: 11
          },
          serviceSecondSell: {
            type: 'string',
            id: 12
          }
        }
      },
      SecondKindItem: {
        fields: {
          secondKindID: {
            type: 'int32',
            id: 1
          },
          kindName: {
            type: 'string',
            id: 2
          },
          secondKindName: {
            type: 'string',
            id: 3
          },
          sequence: {
            type: 'int32',
            id: 4
          },
          state: {
            type: 'string',
            id: 5
          },
          kindID: {
            type: 'int32',
            id: 6
          }
        }
      },
      ThirdKindItem: {
        fields: {
          thirdKindID: {
            type: 'int32',
            id: 1
          },
          kindName: {
            type: 'string',
            id: 2
          },
          secondKindName: {
            type: 'string',
            id: 3
          },
          thirdKindName: {
            type: 'string',
            id: 4
          },
          sequence: {
            type: 'int32',
            id: 5
          },
          state: {
            type: 'string',
            id: 6
          },
          kindID: {
            type: 'int32',
            id: 7
          },
          secondKindID: {
            type: 'int32',
            id: 8
          }
        }
      },
      BrandItem: {
        fields: {
          brandID: {
            type: 'int32',
            id: 1
          },
          brandEnName: {
            type: 'string',
            id: 2
          },
          brandName: {
            type: 'string',
            id: 3
          },
          brandLogoUrl: {
            type: 'string',
            id: 4
          },
          kindName: {
            type: 'string',
            id: 5
          },
          state: {
            type: 'string',
            id: 6
          },
          kindID: {
            type: 'int32',
            id: 7
          },
          brandIntroduction: {
            type: 'string',
            id: 8
          },
          serviceMall: {
            type: 'string',
            id: 9
          },
          serviceAiAuthenticate: {
            type: 'string',
            id: 10
          },
          serviceAiReadMap: {
            type: 'string',
            id: 11
          },
          serviceAiEvaluate: {
            type: 'string',
            id: 12
          },
          hotMall: {
            type: 'string',
            id: 13
          },
          hotAiAuthenticate: {
            type: 'string',
            id: 14
          },
          hotAiReadMap: {
            type: 'string',
            id: 15
          },
          hotAiEvaluate: {
            type: 'string',
            id: 16
          },
          hotSequence: {
            type: 'int32',
            id: 17
          },
          serviceExpertAppraisal: {
            type: 'string',
            id: 18
          },
          hotExpertAppraisal: {
            type: 'string',
            id: 19
          },
          brandCoverUrl: {
            type: 'string',
            id: 20
          },
          serviceRecycle: {
            type: 'string',
            id: 21
          },
          serviceSecondSell: {
            type: 'string',
            id: 22
          },
          hotRecycle: {
            type: 'string',
            id: 23
          },
          hotSecondSell: {
            type: 'string',
            id: 24
          }
        }
      },
      BrandDetail: {
        fields: {
          kindName: {
            type: 'string',
            id: 1
          },
          brandEnName: {
            type: 'string',
            id: 2
          },
          brandName: {
            type: 'string',
            id: 3
          },
          brandCoverUrl: {
            type: 'string',
            id: 4
          },
          state: {
            type: 'string',
            id: 5
          },
          brandIntroduction: {
            type: 'string',
            id: 6
          }
        }
      },
      SeriesItem: {
        fields: {
          seriesID: {
            type: 'int32',
            id: 1
          },
          seriesName: {
            type: 'string',
            id: 2
          },
          seriesCoverUrl: {
            type: 'string',
            id: 3
          },
          brandEnName: {
            type: 'string',
            id: 4
          },
          kindName: {
            type: 'string',
            id: 5
          },
          state: {
            type: 'string',
            id: 6
          },
          seriesIntroduction: {
            type: 'string',
            id: 7
          },
          kindID: {
            type: 'int32',
            id: 8
          },
          brandID: {
            type: 'int32',
            id: 9
          },
          serviceMall: {
            type: 'string',
            id: 10
          },
          serviceAiAuthenticate: {
            type: 'string',
            id: 11
          },
          serviceAiReadMap: {
            type: 'string',
            id: 12
          },
          serviceAiEvaluate: {
            type: 'string',
            id: 13
          },
          hotMall: {
            type: 'string',
            id: 14
          },
          hotAiAuthenticate: {
            type: 'string',
            id: 15
          },
          hotAiReadMap: {
            type: 'string',
            id: 16
          },
          hotAiEvaluate: {
            type: 'string',
            id: 17
          },
          sequence: {
            type: 'int32',
            id: 18
          },
          hotSequence: {
            type: 'int32',
            id: 19
          },
          serviceExpertAppraisal: {
            type: 'string',
            id: 20
          },
          hotExpertAppraisal: {
            type: 'string',
            id: 21
          },
          serviceRecycle: {
            type: 'string',
            id: 22
          },
          serviceSecondSell: {
            type: 'string',
            id: 23
          },
          hotRecycle: {
            type: 'string',
            id: 24
          },
          hotSecondSell: {
            type: 'string',
            id: 25
          }
        }
      },
      SeriesDetail: {
        fields: {
          kindName: {
            type: 'string',
            id: 1
          },
          brandEnName: {
            type: 'string',
            id: 2
          },
          seriesName: {
            type: 'string',
            id: 3
          },
          seriesCoverUrl: {
            type: 'string',
            id: 4
          },
          state: {
            type: 'string',
            id: 5
          },
          seriesIntroduction: {
            type: 'string',
            id: 6
          }
        }
      },
      ColorItem: {
        fields: {
          colorID: {
            type: 'int32',
            id: 1
          },
          colorName: {
            type: 'string',
            id: 2
          },
          colorValue: {
            type: 'string',
            id: 3
          },
          state: {
            type: 'string',
            id: 4
          }
        }
      },
      SizeItem: {
        fields: {
          sizeID: {
            type: 'int32',
            id: 1
          },
          sizeName: {
            type: 'string',
            id: 2
          },
          kindName: {
            type: 'string',
            id: 3
          },
          sequence: {
            type: 'int32',
            id: 4
          },
          state: {
            type: 'string',
            id: 5
          },
          kindID: {
            type: 'int32',
            id: 6
          }
        }
      },
      MaterialItem: {
        fields: {
          materialID: {
            type: 'int32',
            id: 1
          },
          materialName: {
            type: 'string',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          }
        }
      },
      StyleItem: {
        fields: {
          styleItemID: {
            type: 'int32',
            id: 1
          },
          styleName: {
            type: 'string',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          }
        }
      },
      NewsItem: {
        fields: {
          newsID: {
            type: 'int32',
            id: 1
          },
          kindName: {
            type: 'string',
            id: 2
          },
          newsAbbreviation: {
            type: 'string',
            id: 3
          },
          newsDescription: {
            type: 'string',
            id: 4
          },
          newsName: {
            type: 'string',
            id: 5
          },
          sequence: {
            type: 'int32',
            id: 6
          },
          state: {
            type: 'string',
            id: 7
          },
          kindID: {
            type: 'int32',
            id: 8
          }
        }
      },
      ProductItem: {
        fields: {
          skcID: {
            type: 'string',
            id: 1
          },
          productName: {
            type: 'string',
            id: 2
          },
          productMainImgUrl: {
            type: 'string',
            id: 3
          },
          kindName: {
            type: 'string',
            id: 4
          },
          brandName: {
            type: 'string',
            id: 5
          },
          productCode: {
            type: 'string',
            id: 6
          },
          state: {
            type: 'string',
            id: 7
          },
          productID: {
            type: 'int32',
            id: 8
          },
          brandEnName: {
            type: 'string',
            id: 9
          },
          serviceMall: {
            type: 'string',
            id: 10
          },
          serviceAiAuthenticate: {
            type: 'string',
            id: 11
          },
          serviceAiReadMap: {
            type: 'string',
            id: 12
          },
          serviceAiEvaluate: {
            type: 'string',
            id: 13
          },
          AiReadMapSetCount: {
            type: 'int32',
            id: 14
          },
          skuStatus: {
            type: 'string',
            id: 15
          },
          middleAges: {
            type: 'string',
            id: 16
          },
          seriesName: {
            type: 'string',
            id: 17
          },
          account: {
            type: 'string',
            id: 18
          },
          updateTime: {
            type: 'string',
            id: 19
          },
          serviceRecycle: {
            type: 'string',
            id: 20
          },
          serviceSecondSell: {
            type: 'string',
            id: 21
          }
        }
      },
      CountryPrice: {
        fields: {
          countryCode: {
            type: 'string',
            id: 1
          },
          price: {
            type: 'int32',
            id: 2
          }
        }
      },
      NewsPrice: {
        fields: {
          newsId: {
            type: 'string',
            id: 1
          },
          price: {
            type: 'int32',
            id: 2
          },
          minPrice: {
            type: 'int32',
            id: 3
          }
        }
      },
      ProductBasicInformation: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          },
          secondKindID: {
            type: 'int32',
            id: 2
          },
          thirdKindID: {
            type: 'int32',
            id: 3
          },
          brandID: {
            type: 'int32',
            id: 4
          },
          productName: {
            type: 'string',
            id: 5
          },
          produceNum: {
            type: 'string',
            id: 6
          },
          releaseDate: {
            type: 'string',
            id: 7
          },
          releasePrice: {
            type: 'int32',
            id: 8
          },
          colorID: {
            type: 'int32',
            id: 9
          },
          colorName: {
            type: 'string',
            id: 10
          },
          skuList: {
            rule: 'repeated',
            type: 'SkuList',
            id: 11
          },
          imgsInfo: {
            rule: 'repeated',
            type: 'ImgsInfo',
            id: 12
          },
          kindName: {
            type: 'string',
            id: 13
          },
          secondKindName: {
            type: 'string',
            id: 14
          },
          thirdKindName: {
            type: 'string',
            id: 15
          },
          brandName: {
            type: 'string',
            id: 16
          },
          skcID: {
            type: 'string',
            id: 17
          },
          serviceMall: {
            type: 'string',
            id: 18
          },
          serviceAiAuthenticate: {
            type: 'string',
            id: 19
          },
          serviceAiReadMap: {
            type: 'string',
            id: 20
          },
          serviceAiEvaluate: {
            type: 'string',
            id: 21
          },
          aiReadMapSet: {
            rule: 'repeated',
            type: 'AiImgsSetInfo',
            id: 22
          },
          brandEnName: {
            type: 'string',
            id: 23
          },
          countryPrice: {
            rule: 'repeated',
            type: 'CountryPrice',
            id: 24
          },
          description: {
            type: 'string',
            id: 25
          },
          serviceRecycle: {
            type: 'string',
            id: 26
          },
          serviceSecondSell: {
            type: 'string',
            id: 27
          },
          newsPrice: {
            rule: 'repeated',
            type: 'NewsPrice',
            id: 28
          }
        }
      },
      ProductAccessoryInformation: {
        fields: {
          seriesID: {
            type: 'int32',
            id: 1
          },
          origin: {
            type: 'string',
            id: 2
          },
          forPeople: {
            type: 'string',
            id: 3
          },
          materialStr: {
            type: 'string',
            id: 4
          },
          styleStr: {
            type: 'string',
            id: 5
          },
          seriesName: {
            type: 'string',
            id: 6
          },
          materialStrID: {
            type: 'string',
            id: 7
          },
          styleStrID: {
            type: 'string',
            id: 8
          },
          middleAges: {
            type: 'string',
            id: 9
          }
        }
      },
      SkuList: {
        fields: {
          sizeID: {
            type: 'int32',
            id: 1
          },
          measurement: {
            type: 'string',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          isCreate: {
            type: 'bool',
            id: 4
          },
          skcID: {
            type: 'string',
            id: 5
          },
          sizeName: {
            type: 'string',
            id: 6
          },
          ID: {
            type: 'int32',
            id: 7
          },
          skuCode: {
            type: 'string',
            id: 8
          }
        }
      },
      ImgsInfo: {
        fields: {
          url: {
            type: 'string',
            id: 1
          },
          checked: {
            type: 'int32',
            id: 2
          },
          isCreate: {
            type: 'bool',
            id: 3
          },
          imgID: {
            type: 'int32',
            id: 4
          },
          skcID: {
            type: 'string',
            id: 5
          }
        }
      },
      AiImgsSetInfo: {
        fields: {
          ID: {
            type: 'int32',
            id: 1
          },
          skcID: {
            type: 'string',
            id: 2
          },
          url: {
            type: 'string',
            id: 3
          },
          isCreate: {
            type: 'bool',
            id: 4
          }
        }
      },
      KindSelectItem: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          },
          kindName: {
            type: 'string',
            id: 2
          }
        }
      },
      SecondKindSelectItem: {
        fields: {
          secondKindID: {
            type: 'int32',
            id: 1
          },
          secondKindName: {
            type: 'string',
            id: 2
          }
        }
      },
      ThirdKindSelectItem: {
        fields: {
          thirdKindID: {
            type: 'int32',
            id: 1
          },
          thirdKindName: {
            type: 'string',
            id: 2
          }
        }
      },
      BrandSelectItem: {
        fields: {
          brandID: {
            type: 'int32',
            id: 1
          },
          brandEnName: {
            type: 'string',
            id: 2
          }
        }
      },
      SeriesSelectItem: {
        fields: {
          seriesID: {
            type: 'int32',
            id: 1
          },
          seriesName: {
            type: 'string',
            id: 2
          }
        }
      },
      SizeSelectItem: {
        fields: {
          sizeID: {
            type: 'int32',
            id: 1
          },
          sizeName: {
            type: 'string',
            id: 2
          }
        }
      },
      ComprehensiveInfoItem: {
        fields: {
          sizeList: {
            rule: 'repeated',
            type: 'SizeItem',
            id: 1
          },
          styleList: {
            rule: 'repeated',
            type: 'StyleItem',
            id: 2
          },
          materialList: {
            rule: 'repeated',
            type: 'MaterialItem',
            id: 3
          },
          colorList: {
            rule: 'repeated',
            type: 'ColorItem',
            id: 4
          }
        }
      },
      ForPeopleItem: {
        fields: {
          forPeopleID: {
            type: 'int32',
            id: 1
          },
          forPeopleName: {
            type: 'string',
            id: 2
          }
        }
      },
      AdminOrderBrief: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          buyerPhone: {
            type: 'string',
            id: 2
          },
          buyerNickname: {
            type: 'string',
            id: 3
          },
          pid: {
            type: 'string',
            id: 4
          },
          productName: {
            type: 'string',
            id: 5
          },
          productPrice: {
            type: 'int32',
            id: 6
          },
          actualPrice: {
            type: 'int32',
            id: 7
          },
          state: {
            type: 'string',
            id: 8
          },
          orderTime: {
            type: 'string',
            id: 9
          },
          sellerExpressNo: {
            type: 'string',
            id: 10
          },
          stateText: {
            type: 'string',
            id: 11
          },
          buttonList: {
            rule: 'repeated',
            type: 'AdminButton',
            id: 12
          },
          isSeckill: {
            type: 'bool',
            id: 13
          },
          avatarHDImage: {
            type: 'string',
            id: 14
          },
          newsName: {
            type: 'string',
            id: 15
          },
          appSource: {
            type: 'AppSource',
            id: 16
          },
          orderType: {
            type: 'string',
            id: 17
          }
        }
      },
      AdminBaseOrderInfo: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          source: {
            type: 'string',
            id: 2
          },
          productPrice: {
            type: 'int32',
            id: 3
          },
          sellerDeliverTime: {
            type: 'string',
            id: 4
          },
          platformReceiveTime: {
            type: 'string',
            id: 5
          },
          state: {
            type: 'string',
            id: 6
          },
          payType: {
            type: 'string',
            id: 7
          },
          deliverFee: {
            type: 'int32',
            id: 8
          },
          sellerExpressNo: {
            type: 'string',
            id: 9
          },
          platformDeliverTime: {
            type: 'string',
            id: 10
          },
          orderTime: {
            type: 'string',
            id: 11
          },
          payTime: {
            type: 'string',
            id: 12
          },
          actualPay: {
            type: 'int32',
            id: 13
          },
          platformExpressNo: {
            type: 'string',
            id: 14
          },
          stateText: {
            type: 'string',
            id: 15
          }
        }
      },
      BuyerAddressInfo: {
        fields: {
          buyerPhone: {
            type: 'string',
            id: 1
          },
          nickname: {
            type: 'string',
            id: 2
          },
          addressee: {
            type: 'string',
            id: 3
          },
          phone: {
            type: 'string',
            id: 4
          },
          address: {
            type: 'string',
            id: 5
          }
        }
      },
      ProductBaseInfo: {
        fields: {
          skc: {
            type: 'string',
            id: 1
          },
          itemID: {
            type: 'string',
            id: 2
          },
          sku: {
            type: 'string',
            id: 3
          },
          kind: {
            type: 'string',
            id: 4
          },
          brand: {
            type: 'string',
            id: 5
          },
          name: {
            type: 'string',
            id: 6
          },
          color: {
            type: 'string',
            id: 7
          },
          size: {
            type: 'string',
            id: 8
          },
          series: {
            type: 'string',
            id: 9
          },
          measurement: {
            type: 'string',
            id: 10
          },
          people: {
            type: 'string',
            id: 11
          },
          material: {
            type: 'string',
            id: 12
          },
          style: {
            type: 'string',
            id: 13
          },
          releasePrice: {
            type: 'int32',
            id: 14
          },
          releaseTime: {
            type: 'string',
            id: 15
          },
          kindId: {
            type: 'int32',
            id: 16
          }
        }
      },
      ProductImageInfo: {
        fields: {
          recordId: {
            type: 'int32',
            id: 1
          },
          imageUrl: {
            type: 'string',
            id: 2
          },
          position: {
            type: 'string',
            id: 3
          },
          required: {
            type: 'bool',
            id: 4
          }
        }
      },
      SellerProductInfo: {
        fields: {
          quality: {
            type: 'string',
            id: 1
          },
          sellPrice: {
            type: 'int32',
            id: 2
          },
          arrivalPrice: {
            type: 'int32',
            id: 3
          },
          serviceFee: {
            type: 'int32',
            id: 4
          },
          transferFee: {
            type: 'int32',
            id: 5
          },
          sendWord: {
            type: 'string',
            id: 6
          },
          imageList: {
            rule: 'repeated',
            type: 'string',
            id: 7
          },
          imgList: {
            rule: 'repeated',
            type: 'ProductImageInfo',
            id: 8
          },
          serviceFeeRate: {
            type: 'string',
            id: 9
          },
          transferFeeRate: {
            type: 'string',
            id: 10
          },
          selfRun: {
            type: 'bool',
            id: 11
          }
        }
      },
      SellerBackAddressInfo: {
        fields: {
          username: {
            type: 'string',
            id: 1
          },
          nickname: {
            type: 'string',
            id: 2
          },
          addressee: {
            type: 'string',
            id: 3
          },
          phone: {
            type: 'string',
            id: 4
          },
          address: {
            type: 'string',
            id: 5
          }
        }
      },
      AdminButton: {
        fields: {
          buttonText: {
            type: 'string',
            id: 1
          },
          buttonEnum: {
            type: 'AdminButtonEnum',
            id: 2
          }
        }
      },
      AdminLogInfo: {
        fields: {
          createTime: {
            type: 'string',
            id: 1
          },
          operator: {
            type: 'string',
            id: 2
          },
          event: {
            type: 'string',
            id: 3
          }
        }
      },
      WalletDetailItem: {
        fields: {
          userPhone: {
            type: 'string',
            id: 1
          },
          tradeTime: {
            type: 'string',
            id: 3
          },
          money: {
            type: 'string',
            id: 4
          },
          balance: {
            type: 'int32',
            id: 5
          },
          state: {
            type: 'string',
            id: 6
          },
          orderNum: {
            type: 'string',
            id: 7
          },
          productName: {
            type: 'string',
            id: 9
          },
          runningType: {
            type: 'WalletRunningCountTypeEnum',
            id: 12
          },
          tradeSerial: {
            type: 'string',
            id: 13
          }
        },
        reserved: [[2, 2], [8, 8], [10, 10], [11, 11]]
      },
      TradeFlowItem: {
        fields: {
          flowNum: {
            type: 'string',
            id: 1
          },
          tradeType: {
            type: 'string',
            id: 2
          },
          tradeTime: {
            type: 'string',
            id: 3
          },
          tradeMoney: {
            type: 'string',
            id: 4
          },
          tradeChannel: {
            type: 'string',
            id: 5
          },
          merchantAccount: {
            type: 'string',
            id: 6
          },
          serialNumOfPaymentChannel: {
            type: 'string',
            id: 7
          },
          userPhone: {
            type: 'string',
            id: 8
          },
          orderNum: {
            type: 'string',
            id: 9
          },
          tradeState: {
            type: 'string',
            id: 10
          },
          changeType: {
            type: 'string',
            id: 11
          },
          button: {
            rule: 'repeated',
            type: 'AdminButton',
            id: 12
          },
          tradeTypeNo: {
            type: 'string',
            id: 13
          },
          appSource: {
            type: 'AppSource',
            id: 14
          }
        }
      },
      HotItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          hotName: {
            type: 'string',
            id: 2
          },
          sequence: {
            type: 'int32',
            id: 3
          },
          state: {
            type: 'string',
            id: 4
          },
          startTime: {
            type: 'string',
            id: 5
          },
          endTime: {
            type: 'string',
            id: 6
          },
          createTime: {
            type: 'string',
            id: 7
          },
          isDefault: {
            type: 'string',
            id: 8
          },
          type: {
            type: 'string',
            id: 9
          }
        }
      },
      SearchItem: {
        fields: {
          sku: {
            type: 'string',
            id: 1
          },
          pid: {
            type: 'string',
            id: 2
          },
          mainPic: {
            type: 'string',
            id: 3
          },
          newsName: {
            type: 'string',
            id: 5
          },
          brandName: {
            type: 'string',
            id: 6
          },
          brandEnName: {
            type: 'string',
            id: 7
          },
          productName: {
            type: 'string',
            id: 8
          },
          actualPrice: {
            type: 'string',
            id: 9
          },
          releasePrice: {
            type: 'string',
            id: 10
          },
          cover: {
            type: 'string',
            id: 11
          },
          relatedOaID: {
            type: 'string',
            id: 12
          },
          isSeckillProduct: {
            type: 'bool',
            id: 13
          },
          seckillPrice: {
            type: 'uint32',
            id: 14
          },
          seckillState: {
            type: 'TimeState',
            id: 15
          },
          seckillEndLeft: {
            type: 'string',
            id: 16
          },
          skc: {
            type: 'string',
            id: 17
          },
          typeProduct: {
            type: 'ProductOriginalType',
            id: 18
          },
          activityId: {
            type: 'uint32',
            id: 19
          },
          isOfficial: {
            type: 'bool',
            id: 20
          }
        }
      },
      AdminPublishFeedback: {
        fields: {
          feedbackNum: {
            type: 'string',
            id: 1
          },
          phone: {
            type: 'string',
            id: 2
          },
          nickname: {
            type: 'string',
            id: 3
          },
          kind: {
            type: 'string',
            id: 4
          },
          brand: {
            type: 'string',
            id: 5
          },
          productName: {
            type: 'string',
            id: 6
          },
          attribute: {
            type: 'string',
            id: 7
          },
          state: {
            type: 'string',
            id: 8
          },
          buttonList: {
            rule: 'repeated',
            type: 'AdminButton',
            id: 12
          },
          createTime: {
            type: 'int64',
            id: 13
          }
        }
      },
      FeedbackProductBaseInfo: {
        fields: {
          kind: {
            type: 'string',
            id: 1
          },
          brand: {
            type: 'string',
            id: 2
          },
          productName: {
            type: 'string',
            id: 3
          },
          attribute: {
            type: 'string',
            id: 4
          },
          newDegree: {
            type: 'string',
            id: 5
          },
          sellPrice: {
            type: 'int32',
            id: 6
          },
          account: {
            type: 'string',
            id: 7
          },
          description: {
            type: 'string',
            id: 8
          }
        }
      },
      SelectItem: {
        fields: {
          itemID: {
            type: 'int32',
            id: 1
          },
          itemName: {
            type: 'string',
            id: 2
          }
        }
      },
      PointItem: {
        fields: {
          pointID: {
            type: 'int32',
            id: 1
          },
          pointName: {
            type: 'string',
            id: 2
          },
          hierarchy: {
            type: 'string',
            id: 3
          },
          kindID: {
            type: 'int32',
            id: 4
          },
          kindName: {
            type: 'string',
            id: 5
          },
          brandID: {
            type: 'int32',
            id: 6
          },
          brandName: {
            type: 'string',
            id: 7
          },
          seriesID: {
            type: 'int32',
            id: 8
          },
          seriesName: {
            type: 'string',
            id: 9
          },
          sequence: {
            type: 'int32',
            id: 10
          },
          important: {
            type: 'string',
            id: 11
          },
          status: {
            type: 'string',
            id: 12
          },
          exampleImage: {
            type: 'string',
            id: 13
          }
        }
      },
      OverallAppraisalRecordItem: {
        fields: {
          ID: {
            type: 'int32',
            id: 1
          },
          OAID: {
            type: 'string',
            id: 2
          },
          genuine: {
            type: 'string',
            id: 3
          },
          hierarchy: {
            type: 'string',
            id: 4
          },
          kindID: {
            type: 'int32',
            id: 5
          },
          kindName: {
            type: 'string',
            id: 6
          },
          brandID: {
            type: 'int32',
            id: 7
          },
          brandName: {
            type: 'string',
            id: 8
          },
          seriesID: {
            type: 'int32',
            id: 9
          },
          seriesName: {
            type: 'string',
            id: 10
          },
          appraisalTime: {
            type: 'string',
            id: 11
          },
          source: {
            type: 'string',
            id: 12
          },
          grade: {
            type: 'string',
            id: 13
          }
        }
      },
      AppraisalKindItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      AppraisalBrandItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      AppraisalSeriesItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      AppraisalPriceItem: {
        fields: {
          priceID: {
            type: 'int32',
            id: 1
          },
          kindID: {
            type: 'int32',
            id: 2
          },
          kindName: {
            type: 'string',
            id: 3
          },
          status: {
            type: 'string',
            id: 4
          },
          price: {
            type: 'int32',
            id: 5
          },
          buttonText: {
            type: 'string',
            id: 6
          }
        }
      },
      AppraisalActivityItem: {
        fields: {
          name: {
            type: 'string',
            id: 1
          },
          jumpURL: {
            type: 'string',
            id: 2
          },
          imageURL: {
            type: 'string',
            id: 3
          },
          status: {
            type: 'string',
            id: 4
          },
          activityID: {
            type: 'int32',
            id: 5
          },
          description: {
            type: 'string',
            id: 6
          }
        }
      },
      AppraisalOrderItem: {
        fields: {
          orderID: {
            type: 'int32',
            id: 1
          },
          appraisalTime: {
            type: 'string',
            id: 2
          },
          orderNo: {
            type: 'string',
            id: 3
          },
          OAID: {
            type: 'string',
            id: 4
          },
          userAccount: {
            type: 'string',
            id: 5
          },
          kindID: {
            type: 'int32',
            id: 6
          },
          kindName: {
            type: 'string',
            id: 7
          },
          brandID: {
            type: 'int32',
            id: 8
          },
          brandName: {
            type: 'string',
            id: 9
          },
          seriesID: {
            type: 'int32',
            id: 10
          },
          seriesName: {
            type: 'string',
            id: 11
          },
          exteriorImg: {
            type: 'string',
            id: 12
          },
          totalAmount: {
            type: 'int32',
            id: 13
          },
          payWay: {
            type: 'string',
            id: 14
          },
          payState: {
            type: 'string',
            id: 15
          },
          result: {
            type: 'string',
            id: 16
          },
          feedback: {
            type: 'string',
            id: 17
          },
          registerTime: {
            type: 'string',
            id: 18
          },
          source: {
            type: 'string',
            id: 19
          },
          UID: {
            type: 'int32',
            id: 20
          },
          grade: {
            type: 'string',
            id: 21
          },
          appraisalSource: {
            type: 'Source',
            id: 22
          },
          appSource: {
            type: 'AppSource',
            id: 23
          }
        }
      },
      AdminSingleAppraisalRecordItem: {
        fields: {
          SAID: {
            type: 'string',
            id: 1
          },
          image: {
            type: 'string',
            id: 2
          },
          pointName: {
            type: 'string',
            id: 3
          },
          grade: {
            type: 'string',
            id: 4
          }
        }
      },
      AdminDoubleSeventhScoreRecord: {
        fields: {
          operateType: {
            type: 'string',
            id: 1
          },
          inviteUser: {
            type: 'string',
            id: 2
          },
          updateScore: {
            type: 'int32',
            id: 3
          },
          createTime: {
            type: 'string',
            id: 4
          },
          score: {
            type: 'int32',
            id: 5
          }
        }
      },
      AppraisalCouponOrderItem: {
        fields: {
          orderID: {
            type: 'int32',
            id: 1
          },
          orderNo: {
            type: 'string',
            id: 2
          },
          phoneNum: {
            type: 'string',
            id: 3
          },
          nickName: {
            type: 'string',
            id: 4
          },
          crouponNo: {
            type: 'string',
            id: 5
          },
          count: {
            type: 'uint32',
            id: 6
          },
          amount: {
            type: 'int32',
            id: 7
          },
          state: {
            type: 'string',
            id: 8
          },
          time: {
            type: 'string',
            id: 9
          }
        }
      },
      TSAdminNodeItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          path: {
            type: 'string',
            id: 3
          },
          level: {
            type: 'int32',
            id: 4
          },
          isChoose: {
            type: 'bool',
            id: 5
          },
          isDisable: {
            type: 'bool',
            id: 6
          },
          sequence: {
            type: 'int32',
            id: 7
          },
          allItem: {
            rule: 'repeated',
            type: 'TSAdminAuthItem',
            id: 8
          },
          authType: {
            type: 'int32',
            id: 9
          },
          fatherName: {
            type: 'string',
            id: 10
          },
          sourceCode: {
            type: 'string',
            id: 11
          },
          parentNodes: {
            rule: 'repeated',
            type: 'int32',
            id: 12
          }
        }
      },
      TSAdminAuthItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          path: {
            type: 'string',
            id: 3
          },
          level: {
            type: 'int32',
            id: 4
          },
          isChoose: {
            type: 'bool',
            id: 5
          },
          isDisable: {
            type: 'bool',
            id: 6
          },
          sequence: {
            type: 'int32',
            id: 7
          },
          allItem: {
            rule: 'repeated',
            type: 'TSAdminSecondAuthItem',
            id: 8
          },
          authType: {
            type: 'int32',
            id: 9
          },
          fatherName: {
            type: 'string',
            id: 10
          },
          sourceCode: {
            type: 'string',
            id: 11
          },
          parentNodes: {
            rule: 'repeated',
            type: 'int32',
            id: 12
          }
        }
      },
      TSAdminSecondAuthItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          path: {
            type: 'string',
            id: 3
          },
          level: {
            type: 'int32',
            id: 4
          },
          isChoose: {
            type: 'bool',
            id: 5
          },
          isDisable: {
            type: 'bool',
            id: 6
          },
          sequence: {
            type: 'int32',
            id: 7
          },
          allItem: {
            rule: 'repeated',
            type: 'TSAdminThAuthItem',
            id: 8
          },
          authType: {
            type: 'int32',
            id: 9
          },
          fatherName: {
            type: 'string',
            id: 10
          },
          sourceCode: {
            type: 'string',
            id: 11
          },
          parentNodes: {
            rule: 'repeated',
            type: 'int32',
            id: 12
          }
        }
      },
      TSAdminThAuthItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          path: {
            type: 'string',
            id: 3
          },
          level: {
            type: 'int32',
            id: 4
          },
          isChoose: {
            type: 'bool',
            id: 5
          },
          isDisable: {
            type: 'bool',
            id: 6
          },
          sequence: {
            type: 'int32',
            id: 7
          },
          authType: {
            type: 'int32',
            id: 8
          },
          fatherName: {
            type: 'string',
            id: 10
          },
          sourceCode: {
            type: 'string',
            id: 11
          },
          parentNodes: {
            rule: 'repeated',
            type: 'int32',
            id: 12
          }
        }
      },
      AdminEABaseOrderInfo: {
        fields: {
          orderNo: {
            type: 'string',
            id: 1
          },
          state: {
            type: 'string',
            id: 2
          },
          orderTime: {
            type: 'string',
            id: 3
          },
          source: {
            type: 'string',
            id: 4
          },
          payWay: {
            type: 'string',
            id: 5
          },
          payTime: {
            type: 'string',
            id: 6
          },
          orderPrice: {
            type: 'int32',
            id: 7
          },
          sellerDeliverTime: {
            type: 'string',
            id: 8
          },
          sellerExpressNo: {
            type: 'string',
            id: 9
          },
          platformReceiveTime: {
            type: 'string',
            id: 10
          },
          platformDeliverTime: {
            type: 'string',
            id: 11
          },
          platformExpressNo: {
            type: 'string',
            id: 12
          },
          recycle: {
            type: 'bool',
            id: 13
          },
          hasRecycled: {
            type: 'bool',
            id: 14
          },
          recyclePrice: {
            type: 'int32',
            id: 15
          }
        }
      },
      AdminEAReportInfo: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          },
          kindName: {
            type: 'string',
            id: 2
          },
          brandID: {
            type: 'int32',
            id: 3
          },
          brandName: {
            type: 'string',
            id: 4
          },
          seriesID: {
            type: 'int32',
            id: 5
          },
          seriesName: {
            type: 'string',
            id: 6
          },
          result: {
            type: 'string',
            id: 7
          },
          grade: {
            type: 'string',
            id: 8
          },
          reportNo: {
            type: 'string',
            id: 9
          },
          productID: {
            type: 'string',
            id: 10
          },
          image: {
            type: 'string',
            id: 11
          }
        }
      },
      WhiteListItem: {
        fields: {
          phoneNumber: {
            type: 'string',
            id: 1
          },
          userName: {
            type: 'string',
            id: 2
          },
          state: {
            type: 'string',
            id: 3
          },
          startTime: {
            type: 'string',
            id: 4
          },
          endTime: {
            type: 'string',
            id: 5
          },
          whiteId: {
            type: 'uint32',
            id: 6
          }
        }
      },
      BargainItem: {
        fields: {
          id: {
            type: 'uint32',
            id: 1
          },
          pidStr: {
            type: 'string',
            id: 2
          },
          mainPic: {
            type: 'string',
            id: 3
          },
          sizeName: {
            type: 'string',
            id: 4
          },
          newsName: {
            type: 'string',
            id: 5
          },
          startTime: {
            type: 'int64',
            id: 6
          },
          endTime: {
            type: 'int64',
            id: 7
          },
          actualPrice: {
            type: 'uint32',
            id: 8
          },
          bargainRange: {
            type: 'string',
            id: 9
          },
          afterBargainPrice: {
            type: 'uint32',
            id: 10
          },
          newOneBargain: {
            type: 'string',
            id: 11
          },
          oldOneBargain: {
            type: 'string',
            id: 12
          },
          baoOneBargain: {
            type: 'string',
            id: 13
          },
          sequence: {
            type: 'uint32',
            id: 14
          },
          productStatus: {
            type: 'int32',
            id: 15
          },
          status: {
            type: 'AdminBargainStatus',
            id: 16
          },
          ProductName: {
            type: 'string',
            id: 17
          },
          saleNum: {
            type: 'int32',
            id: 18
          },
          activityName: {
            type: 'string',
            id: 19
          },
          activityEffect: {
            type: 'int64',
            id: 20
          },
          createTime: {
            type: 'int64',
            id: 21
          },
          level: {
            type: 'string',
            id: 22
          },
          isOfficial: {
            type: 'bool',
            id: 23
          },
          proCount: {
            type: 'int32',
            id: 24
          }
        }
      },
      BargainOperateLogItem: {
        fields: {
          operateTime: {
            type: 'string',
            id: 1
          },
          operator: {
            type: 'string',
            id: 2
          },
          event: {
            type: 'string',
            id: 3
          },
          pid: {
            type: 'string',
            id: 4
          }
        }
      },
      BargainLogItem: {
        fields: {
          phoneNumber: {
            type: 'string',
            id: 1
          },
          cardShareNum: {
            type: 'string',
            id: 2
          },
          posterShareNum: {
            type: 'string',
            id: 3
          },
          totalBargainNum: {
            type: 'string',
            id: 4
          },
          totalBargainPrice: {
            type: 'uint32',
            id: 5
          },
          systemBargainTime: {
            type: 'string',
            id: 6
          },
          completeBargainTime: {
            type: 'string',
            id: 7
          },
          payStatus: {
            type: 'int32',
            id: 8
          },
          uid: {
            type: 'int32',
            id: 9
          },
          id: {
            type: 'int32',
            id: 10
          },
          userName: {
            type: 'string',
            id: 11
          }
        }
      },
      BargainUserItem: {
        fields: {
          phoneNumber: {
            type: 'string',
            id: 1
          },
          bargainAmount: {
            type: 'int32',
            id: 2
          },
          userType: {
            type: 'int32',
            id: 3
          },
          bargainTime: {
            type: 'string',
            id: 4
          },
          userName: {
            type: 'string',
            id: 5
          }
        }
      },
      BargainProductOfficialItem: {
        fields: {
          pid: {
            type: 'string',
            id: 1
          },
          businessmanName: {
            type: 'string',
            id: 2
          },
          title: {
            type: 'string',
            id: 3
          },
          mainPic: {
            type: 'string',
            id: 4
          },
          sizeName: {
            type: 'string',
            id: 5
          },
          newsName: {
            type: 'string',
            id: 6
          },
          status: {
            type: 'string',
            id: 7
          },
          actualPrice: {
            type: 'string',
            id: 8
          },
          businessmanPhone: {
            type: 'string',
            id: 9
          },
          sku: {
            type: 'string',
            id: 10
          },
          selfRun: {
            type: 'bool',
            id: 11
          },
          spu: {
            type: 'string',
            id: 12
          }
        }
      },
      BargainSkcItem: {
        fields: {
          kindName: {
            type: 'string',
            id: 1
          },
          brandEnName: {
            type: 'string',
            id: 2
          },
          productName: {
            type: 'string',
            id: 3
          },
          colorName: {
            type: 'string',
            id: 4
          },
          sizeName: {
            type: 'string',
            id: 5
          },
          seriesName: {
            type: 'string',
            id: 6
          },
          materialName: {
            type: 'string',
            id: 7
          },
          forPeople: {
            type: 'string',
            id: 8
          },
          measurement: {
            type: 'string',
            id: 9
          },
          styleName: {
            type: 'string',
            id: 10
          },
          releasePrice: {
            type: 'int32',
            id: 11
          },
          releaseTime: {
            type: 'string',
            id: 12
          },
          newsName: {
            type: 'string',
            id: 13
          }
        }
      },
      BargainTopInfo: {
        fields: {
          activityName: {
            type: 'string',
            id: 1
          },
          startTime: {
            type: 'int64',
            id: 2
          },
          endTime: {
            type: 'int64',
            id: 3
          },
          proCount: {
            type: 'int32',
            id: 4
          },
          proSaleCount: {
            type: 'int32',
            id: 5
          }
        }
      },
      PublishProductToSelect: {
        fields: {
          sku: {
            type: 'string',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          image: {
            type: 'string',
            id: 3
          },
          color: {
            type: 'string',
            id: 4
          },
          size: {
            type: 'string',
            id: 5
          },
          measure: {
            type: 'string',
            id: 6
          },
          kind: {
            type: 'string',
            id: 7
          },
          brand: {
            type: 'string',
            id: 8
          },
          series: {
            type: 'string',
            id: 9
          },
          spu: {
            type: 'string',
            id: 10
          }
        }
      },
      CompetitveProduct: {
        fields: {
          recordId: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      CompetitiveProductNew: {
        fields: {
          recordId: {
            type: 'int32',
            id: 1
          },
          kindName: {
            type: 'string',
            id: 2
          },
          competitiveProductId: {
            type: 'int32',
            id: 3
          },
          competitiveProductName: {
            type: 'string',
            id: 4
          },
          competitiveNew: {
            type: 'string',
            id: 5
          },
          newDegree: {
            type: 'string',
            id: 6
          },
          kindId: {
            type: 'int32',
            id: 7
          },
          newDegreeId: {
            type: 'int32',
            id: 8
          }
        }
      },
      ProBasicInformation: {
        fields: {
          kindID: {
            type: 'int32',
            id: 1
          },
          brandID: {
            type: 'int32',
            id: 2
          },
          seriesID: {
            type: 'int32',
            id: 3
          },
          productName: {
            type: 'string',
            id: 4
          },
          productCode: {
            type: 'string',
            id: 5
          },
          releaseDate: {
            type: 'string',
            id: 6
          },
          skcInformation: {
            rule: 'repeated',
            type: 'SkcInformation',
            id: 7
          },
          newsPrice: {
            rule: 'repeated',
            type: 'NewsPrice',
            id: 8
          },
          countryPrice: {
            rule: 'repeated',
            type: 'CountryPrice',
            id: 9
          },
          imgsInfo: {
            rule: 'repeated',
            type: 'ImgsInfo',
            id: 10
          },
          aiReadMapSet: {
            rule: 'repeated',
            type: 'AiImgsSetInfo',
            id: 11
          },
          kindName: {
            type: 'string',
            id: 13
          },
          brandName: {
            type: 'string',
            id: 14
          },
          seriesName: {
            type: 'string',
            id: 15
          },
          brandEnName: {
            type: 'string',
            id: 16
          }
        }
      },
      ProAccessoryInformation: {
        fields: {
          origin: {
            type: 'string',
            id: 1
          },
          forPeople: {
            type: 'string',
            id: 2
          },
          materialStrID: {
            type: 'string',
            id: 3
          },
          styleStrID: {
            type: 'string',
            id: 4
          },
          middleAges: {
            type: 'string',
            id: 5
          },
          service: {
            type: 'string',
            id: 6
          },
          description: {
            type: 'string',
            id: 7
          },
          materialStrName: {
            type: 'string',
            id: 8
          },
          styleStrName: {
            type: 'string',
            id: 9
          },
          serviceStrId: {
            type: 'string',
            id: 10
          },
          serviceStrName: {
            type: 'string',
            id: 11
          }
        }
      },
      SkcInformation: {
        fields: {
          colorID: {
            type: 'int32',
            id: 1
          },
          aiReadMapSet: {
            rule: 'repeated',
            type: 'AiImgsSetInfo',
            id: 2
          },
          imgsInfo: {
            rule: 'repeated',
            type: 'ImgsInfo',
            id: 3
          },
          countryPrice: {
            rule: 'repeated',
            type: 'CountryPrice',
            id: 4
          },
          newsPrice: {
            rule: 'repeated',
            type: 'NewsPrice',
            id: 5
          },
          skuInformation: {
            rule: 'repeated',
            type: 'SkuInformation',
            id: 6
          },
          productCode: {
            type: 'string',
            id: 7
          },
          colorName: {
            type: 'string',
            id: 8
          },
          produceName: {
            type: 'string',
            id: 9
          },
          skc: {
            type: 'string',
            id: 10
          },
          enableCount: {
            type: 'int32',
            id: 11
          },
          skuCount: {
            type: 'int32',
            id: 12
          },
          status: {
            type: 'int32',
            id: 13
          },
          aiPicCount: {
            type: 'int32',
            id: 14
          },
          account: {
            type: 'string',
            id: 15
          },
          updateTime: {
            type: 'string',
            id: 16
          },
          mainPic: {
            type: 'string',
            id: 17
          }
        }
      },
      SkuInformation: {
        fields: {
          sizeID: {
            type: 'int32',
            id: 1
          },
          measurement: {
            type: 'string',
            id: 2
          },
          productCode: {
            type: 'string',
            id: 3
          },
          imgsInfo: {
            rule: 'repeated',
            type: 'ImgsInfo',
            id: 4
          },
          newsPrice: {
            rule: 'repeated',
            type: 'NewsPrice',
            id: 5
          },
          aiReadMapSet: {
            rule: 'repeated',
            type: 'AiImgsSetInfo',
            id: 6
          },
          countryPrice: {
            rule: 'repeated',
            type: 'CountryPrice',
            id: 7
          },
          isCreate: {
            type: 'bool',
            id: 8
          },
          produceName: {
            type: 'string',
            id: 9
          },
          colorNickName: {
            type: 'string',
            id: 10
          },
          sku: {
            type: 'string',
            id: 11
          },
          sizeName: {
            type: 'string',
            id: 12
          },
          status: {
            type: 'int32',
            id: 13
          }
        }
      },
      ProItem: {
        fields: {
          spu: {
            type: 'string',
            id: 1
          },
          productName: {
            type: 'string',
            id: 2
          },
          productMainImgUrl: {
            type: 'string',
            id: 3
          },
          kindName: {
            type: 'string',
            id: 4
          },
          brandName: {
            type: 'string',
            id: 5
          },
          serviceStrName: {
            type: 'string',
            id: 6
          },
          state: {
            type: 'string',
            id: 7
          },
          brandEnName: {
            type: 'string',
            id: 8
          },
          skcStatus: {
            type: 'string',
            id: 9
          },
          seriesName: {
            type: 'string',
            id: 10
          },
          account: {
            type: 'string',
            id: 11
          },
          updateTime: {
            type: 'string',
            id: 12
          },
          enableCount: {
            type: 'int32',
            id: 13
          },
          skcCount: {
            type: 'int32',
            id: 14
          },
          kindID: {
            type: 'int32',
            id: 15
          }
        }
      },
      ServiceInformation: {
        fields: {
          serviceID: {
            type: 'int32',
            id: 1
          },
          serviceName: {
            type: 'string',
            id: 2
          }
        }
      },
      SkcTopItem: {
        fields: {
          spu: {
            type: 'string',
            id: 1
          },
          spuStatus: {
            type: 'int32',
            id: 2
          },
          kindName: {
            type: 'string',
            id: 4
          },
          brandEnName: {
            type: 'string',
            id: 5
          },
          seriesName: {
            type: 'string',
            id: 6
          },
          productName: {
            type: 'string',
            id: 7
          },
          kindID: {
            type: 'int32',
            id: 8
          }
        }
      },
      SkuTopItem: {
        fields: {
          spu: {
            type: 'string',
            id: 1
          },
          spuStatus: {
            type: 'int32',
            id: 2
          },
          skc: {
            type: 'string',
            id: 3
          },
          skcStatus: {
            type: 'int32',
            id: 4
          },
          productName: {
            type: 'string',
            id: 5
          },
          colorName: {
            type: 'string',
            id: 6
          },
          kindID: {
            type: 'int32',
            id: 7
          }
        }
      },
      SkcItem: {
        fields: {
          skc: {
            type: 'string',
            id: 1
          },
          colorName: {
            type: 'string',
            id: 2
          },
          productMainImgUrl: {
            type: 'string',
            id: 3
          },
          AiReadMapSetCount: {
            type: 'int32',
            id: 4
          },
          state: {
            type: 'string',
            id: 5
          },
          account: {
            type: 'string',
            id: 6
          },
          updateTime: {
            type: 'string',
            id: 7
          },
          enableCount: {
            type: 'int32',
            id: 8
          },
          skuCount: {
            type: 'int32',
            id: 9
          },
          releasePrice: {
            type: 'int32',
            id: 10
          },
          productCode: {
            type: 'string',
            id: 11
          },
          skuStatus: {
            type: 'string',
            id: 12
          }
        }
      },
      SkuItem: {
        fields: {
          sku: {
            type: 'string',
            id: 1
          },
          sizeName: {
            type: 'string',
            id: 2
          },
          productMainImgUrl: {
            type: 'string',
            id: 3
          },
          measurement: {
            type: 'string',
            id: 4
          },
          state: {
            type: 'string',
            id: 5
          },
          account: {
            type: 'string',
            id: 6
          },
          updateTime: {
            type: 'string',
            id: 7
          },
          releasePrice: {
            type: 'int32',
            id: 8
          },
          productCode: {
            type: 'string',
            id: 9
          }
        }
      },
      OpLogItem: {
        fields: {
          event: {
            type: 'string',
            id: 1
          },
          account: {
            type: 'string',
            id: 2
          },
          opTime: {
            type: 'int64',
            id: 3
          }
        }
      },
      ServiceItem: {
        fields: {
          id: {
            type: 'int32',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          },
          code: {
            type: 'string',
            id: 3
          }
        }
      },
      PurchaseProduct: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          },
          kind: {
            type: 'string',
            id: 2
          },
          brand: {
            type: 'string',
            id: 3
          },
          name: {
            type: 'string',
            id: 4
          },
          size: {
            type: 'string',
            id: 5
          },
          sku: {
            type: 'string',
            id: 6
          },
          newDegree: {
            type: 'string',
            id: 7
          },
          remark: {
            type: 'string',
            id: 8
          },
          price: {
            type: 'uint32',
            id: 9
          },
          newDegreeId: {
            type: 'int32',
            id: 10
          },
          state: {
            type: 'ProductPurchaseOfflineState',
            id: 11
          },
          buttonList: {
            rule: 'repeated',
            type: 'ProductPurchaseOfflineAction',
            id: 12
          }
        }
      },
      PurchaseOrderInfo: {
        fields: {
          recordId: {
            type: 'uint32',
            id: 1
          },
          purchaseTime: {
            type: 'string',
            id: 2
          },
          purchaseNo: {
            type: 'string',
            id: 3
          },
          totalPrice: {
            type: 'uint32',
            id: 4
          },
          initiator: {
            type: 'string',
            id: 5
          },
          supplier: {
            type: 'string',
            id: 6
          },
          state: {
            type: 'PurchaseOrderState',
            id: 7
          },
          purchaseType: {
            type: 'PurchaseType',
            id: 8
          },
          expressNo: {
            type: 'string',
            id: 9
          },
          expressFee: {
            type: 'uint32',
            id: 10
          },
          prodcutList: {
            rule: 'repeated',
            type: 'PurchaseProduct',
            id: 11
          },
          remark: {
            type: 'string',
            id: 12
          },
          supplierId: {
            type: 'uint32',
            id: 13
          },
          buttonList: {
            rule: 'repeated',
            type: 'PurchaseOrderAction',
            id: 14
          },
          warehouseTotalPrice: {
            type: 'uint32',
            id: 15
          },
          actualRemit: {
            type: 'uint32',
            id: 16
          }
        }
      },
      AdminButtonEnum: {
        values: {
          CancelOrder: 0,
          ConfirmReceive: 1,
          StartCheck: 2,
          CheckPass: 3,
          CheckFail: 4,
          AppraisalPass: 5,
          AppraisalFail: 6,
          AppraisalRefused: 7,
          SendBackSeller: 8,
          SendToBuyer: 9,
          Refund: 10,
          Remit: 11,
          Detail: 12,
          GoToAdd: 13,
          NoProcess: 14,
          RemitAgain: 15,
          RemitManually: 16
        }
      },
      AdminPublishFeedbackEnum: {
        values: {
          Default: 0,
          ToBeProcessed: 1,
          AlreadyProcessed: 2,
          NotProcessTemporarily: 3
        }
      },
      AskEnum: {
        values: {
          All: 0,
          PRE_SALE: 1,
          POST_SALE: 2
        }
      },
      Source: {
        values: {
          SourceAny: 0,
          SourceWechat: 1,
          SourceDouyin: 2
        }
      },
      AdminBargainStatus: {
        values: {
          AdminBargainAny: 0,
          AdminBargainStop: 1,
          AdminBargainNotStart: 2,
          AdminBargainNotStarting: 3,
          AdminBargainNotOver: 4,
          AdminBargainEndStart: 5
        }
      },
      AdminSellerProductStateEnum: {
        values: {
          AdminSellerProductStateEnum_ToBeBid: 0,
          AdminSellerProductStateEnum_OnSale: 1,
          AdminSellerProductStateEnum_SoldOut: 2,
          AdminSellerProductStateEnum_TemporaryClosed: 3,
          AdminSellerProductStateEnum_FavoriteClosed: 4
        }
      },
      WhiteListType: {
        values: {
          WhiteListTypeAny: 0,
          WhiteListTypeOnlineAppraisal: 1,
          WhiteListTypeOfflineAppraisal: 2,
          WhiteListTypeProductMarket: 3,
          WhiteListTypeGroundPromotion: 4
        }
      },
      EfficientState: {
        values: {
          EfficientStateAny: 0,
          EfficientStateToBeEfficient: 1,
          EfficientStateEfficient: 2,
          EfficientStateExpired: 3
        }
      },
      GroundPromotionEvent: {
        values: {
          GroundPromotionEventAny: 0,
          GroundPromotionEventConsignEvaluate: 1,
          GroundPromotionEventRecycleEvaluate: 2,
          GroundPromotionEventConsignRegister: 3,
          GroundPromotionEventRecycleRegister: 4
        }
      },
      AdminOpLog: {
        values: {
          AdminOpLogAny: 0,
          AdminOpLogSpu: 1,
          AdminOpLogSkc: 2,
          AdminOpLogSku: 3,
          AdminOpLogKind: 4,
          AdminOpLogBrand: 5,
          AdminOpLogSeries: 6,
          AdminOpLogColor: 7,
          AdminOpLogSize: 8,
          AdminOpLogMaterial: 9,
          AdminOpLogStyle: 10,
          AdminOpLogNews: 11,
          AdminOpLogService: 12
        }
      },
      PurchaseOrderState: {
        values: {
          PurchaseOrderStateAny: 0,
          PurchaseOrderStateToSubmit: 1,
          PurchaseOrderStateToAudit: 2,
          PurchaseOrderStateToReceive: 3,
          PurchaseOrderStateWarehousing: 4,
          PurchaseOrderStateEnd: 5
        }
      },
      PurchaseType: {
        values: {
          PurchaseTypeAny: 0,
          PurchaseTypeCOffline: 1,
          PurchaseTypeBOffline: 2,
          PurchaseTypeCRecycle: 3,
          PurchaseTypeCConsign: 4
        }
      },
      ProductPurchaseOfflineState: {
        values: {
          ProductPurchaseOfflineStateAny: 0,
          ProductPurchaseOfflineStateInit: 1,
          ProductPurchaseOfflineStateToAppraisal: 2,
          ProductPurchaseOfflineStateSkuToAudit: 3,
          ProductPurchaseOfflineStateToEvaluate: 4,
          ProductPurchaseOfflineStateToAudit: 5,
          ProductPurchaseOfflineStateToConfirm: 6,
          ProductPurchaseOfflineStateBack: 7,
          ProductPurchaseOfflineStateWarehouse: 8
        }
      },
      PurchaseOrderAction: {
        values: {
          PurchaseOrderActionAny: 0,
          PurchaseOrderActionSubmit: 1,
          PurchaseOrderActionAuditYes: 2,
          PurchaseOrderActionAuditNo: 3,
          PurchaseOrderActionReceive: 4,
          PurchaseOrderActionRemit: 5
        }
      },
      ProductPurchaseOfflineAction: {
        values: {
          ProductPurchaseOfflineActionAny: 0,
          ProductPurchaseOfflineActionAppraisalYes: 1,
          ProductPurchaseOfflineActionAppraisalNo: 2,
          ProductPurchaseOfflineActionSkuAuditYes: 3,
          ProductPurchaseOfflineActionEvaluation: 4,
          ProductPurchaseOfflineActionAuditYes: 5,
          ProductPurchaseOfflineActionAuditNo: 6,
          ProductPurchaseOfflineActionAgreeRecycle: 7,
          ProductPurchaseOfflineActionRefuseRecycle: 8
        }
      },
      TSLogInRequest: {
        fields: {
          phone: {
            type: 'string',
            id: 1
          },
          sms: {
            type: 'string',
            id: 2
          }
        }
      },
      TSLogInResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          },
          token: {
            type: 'string',
            id: 4
          },
          isSelected: {
            type: 'bool',
            id: 5
          }
        }
      },
      TSCode2SessionRequest: {
        fields: {
          code: {
            type: 'string',
            id: 1
          }
        }
      },
      TSCode2SessionResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          openid: {
            type: 'string',
            id: 3
          },
          sessionKey: {
            type: 'string',
            id: 4
          },
          unionid: {
            type: 'string',
            id: 5
          }
        }
      },
      TSMiniProgramGetUnionIDRequest: {
        fields: {
          code: {
            type: 'string',
            id: 1
          },
          encryptedData: {
            type: 'string',
            id: 2
          },
          iv: {
            type: 'string',
            id: 3
          }
        }
      },
      TSMiniProgramGetUnionIDResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          unionid: {
            type: 'string',
            id: 3
          }
        }
      },
      TSMiniProgramLogInRequest: {
        fields: {
          unionID: {
            type: 'string',
            id: 1
          }
        }
      },
      TSMiniProgramLogInResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          },
          token: {
            type: 'string',
            id: 4
          },
          isSelected: {
            type: 'bool',
            id: 5
          }
        }
      },
      TSMicroAppLoginRequest: {
        fields: {
          code: {
            type: 'string',
            id: 1
          },
          encryptedData: {
            type: 'string',
            id: 2
          },
          iv: {
            type: 'string',
            id: 3
          },
          avatar: {
            type: 'string',
            id: 4
          },
          nickname: {
            type: 'string',
            id: 5
          }
        }
      },
      TSMicroAppLoginResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          },
          token: {
            type: 'string',
            id: 4
          },
          unionId: {
            type: 'string',
            id: 5
          }
        }
      },
      TSMiniProgramGetPhoneRequest: {
        fields: {
          code: {
            type: 'string',
            id: 1
          },
          encryptedData: {
            type: 'string',
            id: 2
          },
          iv: {
            type: 'string',
            id: 3
          }
        }
      },
      TSMiniProgramGetPhoneResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          phone: {
            type: 'string',
            id: 3
          }
        }
      },
      TSMiniProgramRegisterRequest: {
        fields: {
          phone: {
            type: 'string',
            id: 1
          },
          unionID: {
            type: 'string',
            id: 2
          },
          bussinessType: {
            type: 'RegisterType',
            id: 3
          },
          inviteKey: {
            type: 'string',
            id: 4
          },
          avatar: {
            type: 'string',
            id: 5
          },
          nickname: {
            type: 'string',
            id: 6
          }
        }
      },
      TSMiniProgramRegisterResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          },
          token: {
            type: 'string',
            id: 4
          },
          isSelected: {
            type: 'bool',
            id: 5
          }
        }
      },
      TSLogOffRequest: {
        fields: {}
      },
      TTSLogOffResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSLogOutRequest: {
        fields: {}
      },
      TSLogOutResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSTokenRenewRequest: {
        fields: {}
      },
      TSTokenRenewResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          token: {
            type: 'string',
            id: 3
          }
        }
      },
      TSSendSmsCodeRequest: {
        fields: {
          phone: {
            type: 'string',
            id: 1
          }
        }
      },
      TSSendSmsCodeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSThirdPartyLoginRequest: {
        fields: {
          loginType: {
            type: 'LoginType',
            id: 1
          },
          bindID: {
            type: 'string',
            id: 2
          }
        }
      },
      TSThirdPartyLoginResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          },
          token: {
            type: 'string',
            id: 4
          },
          isSelected: {
            type: 'bool',
            id: 5
          }
        }
      },
      TSBindPhoneRequest: {
        fields: {
          loginType: {
            type: 'LoginType',
            id: 1
          },
          bindID: {
            type: 'string',
            id: 2
          },
          phone: {
            type: 'string',
            id: 3
          },
          sms: {
            type: 'string',
            id: 4
          },
          nickname: {
            type: 'string',
            id: 5
          },
          avatar: {
            type: 'string',
            id: 6
          }
        }
      },
      TSBindPhoneResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          },
          token: {
            type: 'string',
            id: 4
          },
          isSelected: {
            type: 'bool',
            id: 5
          }
        }
      },
      TSAccountSecurityPageRequest: {
        fields: {}
      },
      TSAccountSecurityPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          phone: {
            type: 'string',
            id: 3
          },
          wechatBound: {
            type: 'bool',
            id: 4
          },
          weiboBound: {
            type: 'bool',
            id: 5
          },
          appleBound: {
            type: 'bool',
            id: 6
          }
        }
      },
      TSThirdPartyBindRequest: {
        fields: {
          loginType: {
            type: 'LoginType',
            id: 1
          },
          bindID: {
            type: 'string',
            id: 2
          },
          changeMode: {
            type: 'string',
            id: 3
          }
        }
      },
      TSThirdPartyBindResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSVerifyPhoneSMSCodeRequest: {
        fields: {}
      },
      TSVerifyPhoneSMSCodeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSVerifyPhoneRequest: {
        fields: {
          sms: {
            type: 'string',
            id: 1
          }
        }
      },
      TSVerifyPhoneResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSCheckNewPhoneRequest: {
        fields: {
          phone: {
            type: 'string',
            id: 1
          }
        }
      },
      TSCheckNewPhoneResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBindNewPhoneRequest: {
        fields: {
          phone: {
            type: 'string',
            id: 1
          },
          sms: {
            type: 'string',
            id: 2
          }
        }
      },
      TSBindNewPhoneResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSUserInfoSetRequest: {
        fields: {
          avatar: {
            type: 'string',
            id: 1
          },
          nickname: {
            type: 'string',
            id: 2
          },
          location: {
            type: 'string',
            id: 3
          },
          sex: {
            type: 'string',
            id: 4
          }
        }
      },
      TSUserInfoSetResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          }
        }
      },
      TSPersonCenterPageRequest: {
        fields: {}
      },
      TSPersonCenterPageResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          },
          orderIcons: {
            rule: 'repeated',
            type: 'PersonCenterIcon',
            id: 4
          },
          sellIcons: {
            rule: 'repeated',
            type: 'PersonCenterIcon',
            id: 5
          },
          toolIcons: {
            rule: 'repeated',
            type: 'PersonCenterIcon',
            id: 6
          },
          collectedProductCount: {
            type: 'uint32',
            id: 7
          },
          likedBrandCount: {
            type: 'uint32',
            id: 8
          }
        }
      },
      TSAccountBaseInfoRequest: {
        fields: {}
      },
      TSAccountBaseInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          }
        }
      },
      TSPersonCenterPageV2Request: {
        fields: {}
      },
      TSPersonCenterPageV2Response: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          user: {
            type: 'User',
            id: 3
          },
          buyOrderList: {
            rule: 'repeated',
            type: 'BuyOrderItem',
            id: 4
          },
          recycleOrderList: {
            rule: 'repeated',
            type: 'RecycleOrderItem',
            id: 5
          },
          consignOrderList: {
            rule: 'repeated',
            type: 'ConsignOrderItem',
            id: 6
          },
          saleOrderList: {
            rule: 'repeated',
            type: 'SaleOrderItem',
            id: 7
          },
          collectedProductCount: {
            type: 'uint32',
            id: 8
          },
          likedBrandCount: {
            type: 'uint32',
            id: 9
          }
        },
        nested: {
          BuyOrderItem: {
            fields: {
              state: {
                type: 'PersonalBuyState',
                id: 1
              },
              number: {
                type: 'int32',
                id: 2
              }
            }
          },
          RecycleOrderItem: {
            fields: {
              state: {
                type: 'PersonalRecycleState',
                id: 1
              },
              number: {
                type: 'int32',
                id: 2
              }
            }
          },
          ConsignOrderItem: {
            fields: {
              state: {
                type: 'PersonalConsignState',
                id: 1
              },
              number: {
                type: 'int32',
                id: 2
              }
            }
          },
          SaleOrderItem: {
            fields: {
              state: {
                type: 'PersonalSaleState',
                id: 1
              },
              number: {
                type: 'int32',
                id: 2
              }
            }
          }
        }
      },
      TSUserAddressListRequest: {
        fields: {}
      },
      TSUserAddressListResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          userAddress: {
            rule: 'repeated',
            type: 'UserAddress',
            id: 3
          }
        }
      },
      TSAddUserAddressRequest: {
        fields: {
          userAddress: {
            type: 'UserAddress',
            id: 1
          },
          changeMode: {
            type: 'string',
            id: 2
          }
        }
      },
      TSAddUserAddressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSDeleteUserAddressRequest: {
        fields: {
          addressID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSDeleteUserAddressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSSetUserDefaultAddressRequest: {
        fields: {
          addressID: {
            type: 'int32',
            id: 1
          }
        }
      },
      TSSetUserDefaultAddressResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSWalletMainInfoRequest: {
        fields: {}
      },
      TSWalletMainInfoResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          balance: {
            type: 'int32',
            id: 3
          },
          alipayAccount: {
            type: 'string',
            id: 4
          },
          singleDayWithdrawMax: {
            type: 'int32',
            id: 5
          },
          singleDayWithdrawRest: {
            type: 'int32',
            id: 6
          },
          isAlipayAccountBound: {
            type: 'bool',
            id: 7
          }
        }
      },
      TSWalletBindAlipayAccountRequest: {
        fields: {
          alipayAccount: {
            type: 'string',
            id: 1
          },
          name: {
            type: 'string',
            id: 2
          }
        }
      },
      TSWalletBindAlipayAccountResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSWalletWithdrawVerificationCodeRequest: {
        fields: {}
      },
      TSWalletWithdrawVerificationCodeResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          prompt: {
            type: 'string',
            id: 3
          }
        }
      },
      TSWalletWithdrawRequest: {
        fields: {
          amount: {
            type: 'int32',
            id: 1
          },
          verificationCode: {
            type: 'string',
            id: 2
          }
        }
      },
      TSWalletWithdrawResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          }
        }
      },
      TSWalletRunningCountRequest: {
        fields: {
          pageNum: {
            type: 'int32',
            id: 1
          },
          pageSize: {
            type: 'int32',
            id: 2
          },
          dateMonth: {
            type: 'string',
            id: 3
          },
          flowType: {
            type: 'WalletRunningCountTypeEnum',
            id: 4
          }
        }
      },
      TSWalletRunningCountResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          flowList: {
            rule: 'repeated',
            type: 'RunningCount',
            id: 3
          },
          isEnd: {
            type: 'bool',
            id: 4
          }
        }
      },
      TSWebPageOpenidRequest: {
        fields: {
          code: {
            type: 'string',
            id: 1
          }
        }
      },
      TSWebPageOpenidResponse: {
        fields: {
          errorCode: {
            type: 'int32',
            id: 1
          },
          errorMsg: {
            type: 'string',
            id: 2
          },
          openid: {
            type: 'string',
            id: 3
          }
        }
      },
      TSWxacodeunlimitRequest: {
        fields: {
          scene: {
            type: 'string',
            id: 1
          },
          page: {
            type: 'string',
            id: 2
          }
        }
      },
      TSWxacodeunlimitResponse: {
        fields: {
          imgData: {
            type: 'bytes',
            id: 1
          }
        }
      }
    }
  }
})

export { $root as default }
