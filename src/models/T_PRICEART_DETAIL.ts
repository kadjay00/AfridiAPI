import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEART_DETAIL', {schema: 'dbo' } )
export class T_PRICEART_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 9,
        scale: 0,
        name: 'PAD_ID_N',
        })
    public PAD_ID_N: number;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'PAD_SEQ_N',
        })
    public PAD_SEQ_N: number;

    @Column('smallint', {
        nullable: true,
        name: 'PAD_SESSION_N',
        })
    public PAD_SESSION_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PAD_IDNUMBER_C',
        })
    public PAD_IDNUMBER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PAD_PVCC_D',
        })
    public PAD_PVCC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PAD_PRCC_D',
        })
    public PAD_PRCC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PAD_PVPC_D',
        })
    public PAD_PVPC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PAD_PRPC_D',
        })
    public PAD_PRPC_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PAD_VAT_C',
        })
    public PAD_VAT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 14,
        name: 'PAD_TIMESTAMP_C',
        })
    public PAD_TIMESTAMP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'PAD_REJECT_C',
        })
    public PAD_REJECT_C: string | null;

}
