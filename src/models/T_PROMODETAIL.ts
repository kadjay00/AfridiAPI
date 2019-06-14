import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMODETAIL', {schema: 'dbo' } )
@Index('IX_PROMODETAIL_PKINDEX', ['DPR_PROMONBR_N', 'DPR_DETAILNBR_N'], {unique: true})
export class T_PROMODETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DPR_PROMONBR_N',
        })
    public DPR_PROMONBR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DPR_DETAILNBR_N',
        })
    public DPR_DETAILNBR_N: number;

    @Column('char', {
        nullable: false,
        name: 'DPR_PROMODETAILTYPE_C',
        })
    public DPR_PROMODETAILTYPE_C: string;

    @Column('int', {
        nullable: true,
        name: 'DPR_SUBDEPARTMENT_N',
        })
    public DPR_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'DPR_BRAND_C',
        })
    public DPR_BRAND_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'DPR_DEPARTMENT_N',
        })
    public DPR_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'DPR_SALESGROUP_C',
        })
    public DPR_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'DPR_SALESFAMILY_C',
        })
    public DPR_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'DPR_SALESSUBFAMILY_C',
        })
    public DPR_SALESSUBFAMILY_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'DPR_CREATIONDATE_DAT',
        })
    public DPR_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'DPR_UPDATEDATE_DAT',
        })
    public DPR_UPDATEDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'DPR_ITEMLISTNBR_N',
        })
    public DPR_ITEMLISTNBR_N: number | null;

}
