import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_ACTIVITYPICKING', {schema: 'dbo' } )
export class T_ECOM_ACTIVITYPICKING {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 16,
        name: 'EAP_USERID_C',
        })
    public EAP_USERID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'EAP_ACTIVITY_N',
        })
    public EAP_ACTIVITY_N: number;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'EAP_LABELS_C',
        })
    public EAP_LABELS_C: string | null;

}
